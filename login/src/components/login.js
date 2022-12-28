import React from "react";
import { useState } from "react";
import './login.css';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import { withRouter } from "react-router-dom";
// import useEffect from 'react';

function Login({setLoginUser}){
    const navigate=useNavigate();

    function handleChange(e){
        // console.log('1')
        // console.log(e.target)
        const {name,value}=e.target
        setUser({
            ...user,       //spread operator
            [name]:value
        })
    }

    const [user,setUser]=useState({
    
        email:"",
        password:""
    
    })
    const [path,setPath]=useState("")
   
    function login(){
        // console.log('2')
        // fetch('',"POST",{

        // })
       
        axios.post("http://localhost:3002/login",user).then((res)=>{
        // console.log(res)
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigate("/")
        
        setPath("/")

        
        })
        
    }

    return(
     
        <div className="login">
               { console.log('3')}
            <h1>Login</h1>
            {console.log("user-login",user)}
            <input type="text" placeholder="email" name="email" value={user.email} onChange={handleChange}></input>
            <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange}></input>
            
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" ><Link to="/register">Register</Link></div>
        </div>
    )
}
export default (Login);

