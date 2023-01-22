import { readFile } from 'fs/promises';
import fs from 'fs';

const imageLink = (num) =>{
  return (`./images/${num}.jpg`)
} 

async function readNum() {
  try {
    const data = await readFile('../pipes/image-service.txt', { encoding: 'utf8' });
    console.log("reading data from image-service.txt:",data);
    return data 
  } catch (err) {
    console.log(err);
  }

}

async function writeImageLink(imageLink){
  try {
    
    await fs.writeFile('../pipes/image-service.txt',imageLink,{flag: 'w+'},()=>{})
     console.log(`write image link to file image-service.txt: ${imageLink}`)
     
  } catch (er) {
    console.log('error:',er.message);
  }
}

var r = 0;

const re = new RegExp('.jpg')

async function routine(){
  
  r =  await readNum()
  if (!r.match(re)) {
    const link = imageLink(r)
    await writeImageLink(link);
  }
}

setInterval(routine, 50);
