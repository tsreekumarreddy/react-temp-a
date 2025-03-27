import React from "react";
import { useState,useRef } from "react";
export default function App9(){
    const[color,setColor]=useState();
    const txtRef =useRef();
    const handleSubmit=()=>{
        txtRef.current.style.color=color
    }
    return (
        <div>
        <h1>This is App9</h1>
        <input type="text" onChange={(e)=>setColor(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <h2 ref={txtRef}>HELLO</h2>
        </div>
    )
}