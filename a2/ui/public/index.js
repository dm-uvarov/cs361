

// import * as fs from 'node:fs/promises';
//import fs from 'fs';
// const fs = require('fs');
// var fs = require('fs');

//import { promises as fs } from 'fs';

const urlRun = ('http://localhost:3000/run')
const urlImage = (('http://localhost:3000/image') )

if (typeof window !== 'undefined') {
window.addEventListener('load', function () {
  const btn = document.querySelector('#btn');

const p = document.querySelector('#log');

async function fetchRun() {
  const response = await fetch(urlRun);
  const data = await response.json();
  console.log('data:',data);
  // const image = await response.json();
  // // waits until the request completes...
  // console.log(image);
  // return image
}

async function fetchToImage(data) {
  const response = await fetch(`${urlImage}/${data.toString()}`);
  const data = await response.json();
  console.log('data:',data);
  // const image = await response.json();
  // // waits until the request completes...
  // console.log(image);
  // return image
}
btn.addEventListener('click', (e)=>{
  //WriteRunMSG();
  console.log('click')
  fetchRun().then(r=>{console.log();
  })
}

)
// async function WriteRunMSG(){
//   try {
//     await appendFile('../pipes/prng-service.txt',runMSG,{flag: 'w+'})
//      console.log('write "run" msg to file prng-service.txt')
//      p.appendChild('message sent')
//   } catch (er) {
//     console.log(er.message);
//   }
// }


})
}