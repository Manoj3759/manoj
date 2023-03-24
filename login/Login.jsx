import React,{useState} from 'react'


const Login = (props) => {
    let[user,setUser]=useState("")
    let[pass,setPass]=useState("")

let handleChange=(e)=>{
    e.preventDefault()
    localStorage.setItem("username",user)
    localStorage.setItem("password",pass)
    console.log({user,pass});
}
  return (
    <div className='main'>
        <h1>SIGN IN</h1>
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
                    <td><button onClick={handleChange}>Submit</button></td>
                    <td><button className="btn" onClick={() => props.onFormSwitch('register')}>
            have an account? lognin here.
        </button></td>
                </tr>
        </table>
        </form>

    </div>
  )
}

export default Login