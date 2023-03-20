import React, { useRef } from 'react'
import VIDEO from './videoplayback.mp4'
import { useState } from 'react';

const Play = () => {
    let[video,setVideo]=useState(VIDEO)
    let[loading,setloading]=useState(false)
    let videoref= useRef()

    let Playpause=()=>{
        if(loading == true){
            setloading(!true)
            videoref.current.play()
        }else{
            setloading(!false)
            videoref.current.pause()
        }
    }
  return (
    <div>
        <video src="video" ref={videoref} onClick={Play}></video>
    </div>
  )
}

export default Play