import { useState } from "react"
export default function App4(){
    const[user,setUser]=useState({})
    const[msg,setMsg]=useState()
    const handleSubmit=()=>{
        if(user.email == "jhon@gmail.com" && user.password=="1234"){
            setMsg("Welcome Jhon")
        }
        else{
            setMsg("Access Denied")
        }
    }
    return (
        <div>
            <h3>
                this is App4
            </h3>
            {msg}
            <p>
                <input type="text"
                 placeholder="Email Address"
                  onChange={(e)=>({...user,email: e.target.value})}/>
            </p>
            <p>
                <input type="password" 
                placeholder="Password" 
                onChange={(e) => setUser({...user,password:e.target.value})}/>
            </p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}