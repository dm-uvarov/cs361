import { readFile } from 'fs/promises';
import fs from 'fs';

const imageLink = (num) =>{
  return (`./public/${num}.jpg`)
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
    
    await fs.writeFile('../pipes/prng-service.txt',imageLink,{flag: 'w+'},()=>{})
     console.log(`write image link to file image-service.txt: ${imageLink}`)
     
  } catch (er) {
    console.log('error:',er.message);
  }
}


const re = new RegExp('.jpg')

async function routine(){
  
  const r =  await readNum()
  if (!r.match(re)) {
    const link = imageLink(r)
    await writeImageLink(link);
  }
}

setInterval(routine, 2000);
