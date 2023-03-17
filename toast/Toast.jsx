import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    let handleClick=()=>{
        toast.success("logged in")
        toast.info("info",{
            position:toast.POSITION.BOTTOM_LEFT
        })
        toast.warning("warning",{
            position:toast.POSITION.BOTTOM_CENTER
        })
    }
  return (
    <div>
        <ToastContainer/>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Toast