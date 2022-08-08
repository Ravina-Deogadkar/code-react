import React, { useEffect } from 'react'
import {useState} from 'react';

export default function Color() {
  const [color, setColor]=useState("255,255,255");

  const handleColor=()=>{
    console.log("reset click");
    let red = parseInt(Math.random()*255);
    let blue = parseInt(Math.random()*255);
    let green = parseInt(Math.random()*255);
    setColor(red+","+blue+","+green);
  }

 useEffect(()=>{
 });

  const divColor = {width:'100px', height:'100px', border:'1px solid black', marginTop:'25px', backgroundColor: "rgb("+color+")"};
  return (

    <div style={{margin:"50px"}}>
      <h2>Random Color Generator</h2>
        <p> Colour : {"RGB("+color+")"}</p>
        <button onClick={handleColor}>
          Reset
        </button>
        <br/>
        <div style = {divColor}></div>
    </div>
  )
}
