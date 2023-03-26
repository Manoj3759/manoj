import React,{useState} from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let[pass,setPass]=useState('')
    let[user,setUser]=useState('')
    let navigate =useNavigate()

    let handleBtn=()=>{
        window.location.assign('/Sign')
    }
    let handleChange=(e)=>{
        e.preventDefault()
        console.log({user,pass});
        let upUser=localStorage.getItem("username",user)
        let upPass=localStorage.getItem("password",pass)
        if (user != "" && pass != "") {
            console.log('data');
            if ((upUser == user && upPass == pass)) {
                toast.success('LOGIN SUCCESSFUL')
            } else {
                toast.warning('INVALID DATA')
            }
        } else {
            toast.warning("Enter DATA")
        }
    }
  return (
    <div className='main'>
    <ToastContainer/>
    <h1>Login</h1>
    <form action="">
        <label htmlFor="user">Username</label><br />
        <input type="text" id='user' onChange={(e)=>{
           setUser(e.target.value)}} /> <br />
        <label htmlFor="pass">Password</label><br />
        <input type="password" id='pass' onChange={(e)=>{
           setPass(e.target.value)}}/> <br />
        <button onClick={handleChange}>SUBMIT</button>
    </form>
    <button className='btn' onClick={handleBtn}>SIGN UP HERE</button>
</div>
  )
}

export default Login