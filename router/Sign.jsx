import React,{useState} from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Sign = () => {
    let[pass,setPass]=useState('')
    let[user,setUser]=useState('')
    let navigate =useNavigate()
    let handleChange=(e)=>{
        e.preventDefault()
        console.log({user,pass});
        localStorage.setItem("username",user)
        localStorage.setItem("password",pass)
        if (user != "" && pass != "") {
            window.location.assign('/')
            console.log("data");
        }else{
            toast.warning("INVALID DATA")
        }

    }
  return (
    <div className='main'>
        <ToastContainer/>
        <h1>Sign up</h1>
        <form action="">
            <label htmlFor="user">Username</label><br />
            <input type="text" id='user' onChange={(e)=>{
               setUser(e.target.value)}} /> <br />
            <label htmlFor="pass">Password</label><br />
            <input type="password" id='pass' onChange={(e)=>{
               setPass(e.target.value)}}/> <br />
            <button onClick={handleChange}>SUBMIT</button>

        </form>
    </div>
  )
}

export default Sign