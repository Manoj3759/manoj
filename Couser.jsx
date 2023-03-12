import React from 'react'

const Couser = (props) => {
  if(props.data.available == true){
    return (
    <>
    <h1>{props.data.name}</h1>
    <h2>{props.data.duration}</h2>
    <button style={{color:"green"}}>AVAILABLE</button>
    </>
  )
}
else{
    return (
    <>
    <h1>{props.data.name}</h1>
    <h2>{props.data.duration}</h2>
    <button style={{color:"green"}}>AVAILABLE</button>
    </>
  )
}
}

export default Couser