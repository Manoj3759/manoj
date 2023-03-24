import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    let[user,setUser]=useState("")
    let[pass,setPass]=useState("")

let handleChange=(e)=>{
    e.preventDefault()
   let userUp = localStorage.getItem("username",user)
    let passUp =localStorage.getItem("password",pass)
    console.log({userUp,passUp});
    console.log({user});
    if (userUp == user && passUp == pass) {
        toast.success('LOGIN SUCCESSFUL')
    } else {
        toast.warning('INVALID DATA')
    }
}
  return (
    <div className='main'>
        <ToastContainer/>
        <h1>LOG IN </h1>
        <form action="">
            <table>
                <tr>
                    <td> <label htmlFor="username">Username :</label></td>
                    <td><input type="text" htmlFor="username" onChange={(e)=>{
            setUser(e.target.value)
        }}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">Password :</label></td>
                    <td><input type="password" htmlFor="password" onChange={(e)=>{
            setPass(e.target.value)
        }} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={handleChange}>Login</button></td>
                    <td><button className='btn' onClick={() => props.onFormSwitch('login')}>
          don't  have an account? Signin here.
        </button></td>
                </tr>
        </table>
        </form>


    </div>
  )
}

export default Signup