import React from "react";


export default function({theme}){

  const {name,brightest,lightest} = theme 

  return(
    <li className="themeElement"style={{
      backgroundColor:brightest,
      color:lightest,

    }}
    ><a>{name} </a></li>

  )

}