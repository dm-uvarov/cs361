

// import * as fs from 'node:fs/promises';
//import fs from 'fs';
// const fs = require('fs');
// var fs = require('fs');

//import { promises as fs } from 'fs';

const url = ('http://localhost:3000/run')

if (typeof window !== 'undefined') {
window.addEventListener('load', function () {
  const btn = document.querySelector('#btn');

const p = document.querySelector('#log');

async function fetchRun() {
  const response = await fetch(url);
  console.log(response)
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