import { useState } from "react";

export default function App3(){
    const [email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email == "jhon@gmail.com" && password=="1234"){
            setMsg("Welcome Jhon")
        }
        else{
            setMsg("Access Denied")
        }
    }
    return(
        <div>
            <h3>This is App3</h3>
            {msg}
            <p><input type="text" 
            placeholder="Email Add" 
            onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p><input type="password"
             placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}/>
              </p>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}