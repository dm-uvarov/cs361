import { readFile } from 'fs/promises';
import fs from 'fs';

var randNumber = Math.floor(Math.random() * 3);

async function read() {
  try {
    const data = await readFile('../pipes/prng-service.txt', { encoding: 'utf8' });
    console.log("reading data from prtg-service.txt:",data);
    return data
  } catch (err) {
    console.log(err);
  }

}

async function writeRandNum(){
  try {
    randNumber = Math.floor(Math.random() * 15);
    await fs.writeFile('../pipes/prng-service.txt',randNumber.toString(),{flag: 'w+'},()=>{})
     console.log(`write random number from 0 to 15 to file prng-service.txt: ${randNumber}`)
     console.log
  } catch (er) {
    console.log('error:',er.message);
  }
}


async function routine(){
  const r =  await read()
  if (r =='run') {
    await writeRandNum();
  }
}

setInterval(routine, 1000);
