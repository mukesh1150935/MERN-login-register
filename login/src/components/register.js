import React from "react";
import { useState } from "react";
import './register.css';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
function Register(){
    const navigate=useNavigate();

const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
})



function handleChange(e){
    console.log(e.target)
    const {name,value}=e.target
    setUser({
        ...user,       //spread operator
        [name]:value
    })
}

function register(){
    const {name,email,password,reEnterPassword}=user
    if (name&&email&&password&&(password===reEnterPassword)){
        axios.post("http://localhost:3002/register",user).then((res)=>{
            console.log(res)
            alert(res.data.message)
            navigate("/login")
            
        })
        // alert("posted")
    }else{
        alert("enter all credential correct")
    }
  
}
const {name,email,password,reEnterPassword}=user
    return(
        <div className="register">
            <h1>Register</h1>
            {console.log("user",user)}
            <input type="text" name="name" value={user.name} placeholder="your name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="your email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter-password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" ><Link to="/login">Login</Link></div>
            
            
        </div>
    )
}
export default Register;