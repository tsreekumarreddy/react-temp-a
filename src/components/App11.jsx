import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function App11(){
    const Navigate=useNavigate();
    const handleSubmit=()=>{
        Navigate("/app8")
    }
    return(
        <div>
            <h1> In App11</h1>
            <button onClick={handleSubmit}>Goto App8</button>
            <p>
                <Link to="/app5">App5</Link>
            </p>
        </div>
    )
}