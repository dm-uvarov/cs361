

// import * as fs from 'node:fs/promises';
//import fs from 'fs';
// const fs = require('fs');
// var fs = require('fs');

// import { setMaxIdleHTTPParsers } from "http";

//import { promises as fs } from 'fs';
const imageE = document.querySelector("#img")
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



async function fetchToImage() {
  const response = await fetch(`${urlImage}`);
  const data = await response.json();
  console.log('image:',data);
  await (imageE.src = data);
}
btn.addEventListener('click', (e)=>{
  //WriteRunMSG();
  e.preventDefault();
  console.log('click')
  fetchRun().then(
  )
  setTimeout(fetchToImage()
    ,2000)
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