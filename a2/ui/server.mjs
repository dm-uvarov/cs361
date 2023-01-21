import { readFile } from 'fs/promises';
import express from 'express';
import 'dotenv/config'
import fs from 'fs';

const runMSG = "run"
const app = express();
const PORT = process.env.PORT

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));

async function WriteRunMSG(){
  try {
    await fs.writeFile('../pipes/prng-service.txt',runMSG,{flag: 'w+'},()=>{})
     console.log('write "run" msg to file prng-service.txt')
  } catch (er) {
    console.log('error:',er.message);
  }
}

async function writeNumberMSG(msg){
  try {
    await fs.writeFile('../pipes/image-service.txt',msg,{flag: 'w+'},()=>{})
     console.log(`write ${msg} msg to file image-service.txt`)
  } catch (er) {
    console.log('error:',er.message);
  }
}

async function read() {
  try {
    const data = await readFile('../pipes/prng-service.txt', { encoding: 'utf8' });
    console.log("reading data from prtg-service.txt:",data);
    return data
  } catch (err) {
    console.log(err);
  }

}

async function readImgUrl() {
  try {
    const data = await readFile('../pipes/image-service.txt', { encoding: 'utf8' });
    console.log("reading data from image-service.txt:",data);
    return data
  } catch (err) {
    console.log(err);
  }

}
async function routine() {
  const r= await read();

  if (r != 'run'){
    await writeNumberMSG(r)
  }
}
var resp 

async function routine2() {
  resp = await readImgUrl();
    
}


setInterval(routine,1000)

setInterval(routine2,1000)

app.get("/run", (_,res)=>{
  WriteRunMSG()
  var jsondata = JSON.stringify(resp)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log('jsondata:', jsondata)
  res.send(jsondata);
})



app.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}...`)
})