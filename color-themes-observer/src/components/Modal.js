import React from "react";
import { useState } from "react";

export default function Modal({cite}) {

    const {author, quote} = cite[0];

    let blockquote;
    let figcaption;

    blockquote = <blockquote style={{ color: 'orange'}}>{quote}</blockquote>;
    figcaption = <figcaption style={{ color: ''}}> &mdash; {author} <span style={{ color: 'grey'}}>from</span> <cite style={{ color: 'green'}}>https://api-ninjas.com/</cite></figcaption>;


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