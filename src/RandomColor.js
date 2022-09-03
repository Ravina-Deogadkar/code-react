import React from 'react'
import {useState, useEffect} from 'react';
export default function RandomColor() {

  
  const [color, setColor]=useState();

  const handleColor=()=>{
    console.log("reset click");
    let red = parseInt(Math.random()*255);
    let blue = parseInt(Math.random()*255);
    let green = parseInt(Math.random()*255);
    setColor(red+","+blue+","+green);
  }

  useEffect(()=>{
    handleColor();
    console.log("use effect click");
  },{color});
 
  const divColor = {width:'300px', height:'150px', border:'1px solid black', marginTop:'15px', backgroundColor: "rgb("+color+")"};

  return (
    <div style={{margin:"50px"}}>
    <h2>Random Color Generator</h2>
      <p> Colour : {"RGB("+color+")"}
      <button style={{ color: "#3e2723",background: "azure", width: "80px", marginLeft: "25px"}} onClick={handleColor}>
        Reset
      </button>
      </p>
      <br/>
      <div style = {divColor}></div>
  </div>
  )
}
