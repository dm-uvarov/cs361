
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


app.get("/run", (_,res)=>{
  WriteRunMSG();
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({'gotcha': 'gotcha',});
})



app.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}...`)
})