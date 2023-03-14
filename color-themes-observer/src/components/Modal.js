import React from "react";
import { useState } from "react";

export default function Modal({ cite }) {

  const { author, quote } = cite[0];

  let blockquote;
  let figcaption;

  blockquote = <blockquote style={{
      color: 'orange',
      fontWeight: "600",
      fontStyle: "italic",
      textIndent: "1rem"
    }}>{quote}
  </blockquote>;

  figcaption = <figcaption style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: "0.3rem",
      color: ''
    }}> &mdash; 
    
    <span style={{ fontWeight:"550",color: "var(--brightest2)" }}>{author}</span>
    
    <span style={{ color: 'grey' }}> from </span>
    <cite style={{ color: 'green' }}>https://api-ninjas.com/
    </cite>
  </figcaption>;


  return (
    <div className="modal">

      <figure className='quote'>
        <h4>Cite of The Day</h4>
        {blockquote}
        {figcaption}
      </figure>
    </div>
  );

}