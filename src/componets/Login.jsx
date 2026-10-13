import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";  
import { context } from '../context/Context';
import { useNavigate } from 'react-router-dom';
function Login() {
    const {login,user} = useContext(context)
    const navigate = useNavigate()
    const [details,setdetails] = useState({
        email:"",
        password:""
    })

    const handleChang=(e)=>{
        const {name,value} = e.target;
        setdetails({
            ...details,
            [name]:value
    });
    
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(details)
        try{
            const res = await axios.post("  http://0.0.0.0:8000/login",details)
            console.log(res.data)
            login(res.data)
            navigate("/Count")
        }   
        catch{
            console.log("error")
        }
        }
        useEffect(()=>{
            if(user){
                navigate("/Count")
            }
        })
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type = "text"
        value={details.email}
        placeholder='enter mail'
        name='email'
        onChange={handleChang}/>
         <input type='text'
       value={details.password}
       placeholder = "Enter your password"
       name='password'
       onChange={handleChang}
       />
       <button>Submit</button>
       </form>
      
    </div>
  )
}

export default Login