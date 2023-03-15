import React from "react";


export default function({theme,setCurrentTheme}){

  const {name,brightest,lightest,darkest,transparent} = theme 

  function handleClick(e){
    console.log("curent:",theme)
    setCurrentTheme(theme)
    document.documentElement.style.setProperty(
      '--brightest',
      brightest
    );
    document.documentElement.style.setProperty(
      '--lightest',
      lightest
    );
    document.documentElement.style.setProperty(
      '--darkest',
      darkest
    );
    document.documentElement.style.setProperty(
      '--transparent',
      transparent
    );
  }

  return(
    <li 
      className="themeElement"
      style={{
        backgroundColor:lightest,
        color:darkest,
      }}
      onClick = {e=>handleClick(e)}
    ><a>{name} </a></li>

  )

}