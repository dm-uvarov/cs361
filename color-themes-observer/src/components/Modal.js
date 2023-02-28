import React from "react";
import { useState } from "react";

export default function Modal({cite}) {

    const {Author, QOD} = cite;
//    console.log(cite)
//    console.log(Author);
//    console.log(QOD);

    let blockquote;
    let figcaption;
   // if (cite) {
      blockquote = <blockquote>{cite.QOD}</blockquote>;
      figcaption = <figcaption> &mdash; {cite["Author"]} <cite>https://api-ninjas.com/</cite></figcaption>;
        
//    } else {
 //     blockquote = <blockquote>here will be cite of the day</blockquote>;
 //     figcaption = <figcaption> &mdash; author's name here</figcaption>;
 //   }



  return (
    <>
      <h3>Cite of The Day</h3>
      <figure className='quote'>
        {blockquote}
        {figcaption}
      </figure>
    </>
  );

}