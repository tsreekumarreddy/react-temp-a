import React from "react";
import { useState,useEffect } from "react";
export default function App7(){
    const[a,setA]=useState(0);
    const[b,setB]=useState(0);
    const[result,setResult]=useState(0);
const handleSubmit =()=>{
    setResult(Number(a)+Number(b))
}

    return(
        <div>
            <p>
                <input type="number" onChange={(e) => setA(e.target.value)} />
            </p>
            <p>
                <input type="number" onChange={(e) => setB(e.target.value)} />
            </p>
            <button onClick={handleSubmit}>Submit</button>
            <p>
                {result}
            </p>
        </div>
    )
}