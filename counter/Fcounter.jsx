import React from "react";
import { useState } from "react";
import STYLE from './counter.module.css'

const Fcounter=()=>{
    let [count, setcount] = useState(0);
    let handleIncrement=()=>{
        setcount(count+1)
    }
    let handleDecrement=()=>{
        setcount(count-1)
    }
    let handleReset=()=>{
        setcount(0)
    }
    return(
        <div className={STYLE.MAIN}>
      <h1>{count}</h1>
      <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>RESET</button>
      </div>
      </div>
    )
}
export default Fcounter;