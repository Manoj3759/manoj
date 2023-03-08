import React from "react";

const Logo=(props)=>{
    return(
        <>
        <h1>{props.string} {props.number} {props.boolean} {props.data}</h1>
        <img src={props.IMG} alt="" />
        </>
    )
}
export default Logo;