import React,{useState,useEffect} from 'react'
import axiosInstance from './../helper/axiosInstance';

const Read = () => {
    let[data,setData]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get('/posts')
            setData(data)
        }
        fetchData()
    },[])
  return (
    <div style={{
        display:'flex',
        gap:'5px',
        flexWrap:'wrap'
    }}>
        {
            data.map((x)=>{ return(
                <div style={{
                    width:'40%',
                    border:'2px solid black',
                    borderRadius:'25px',
                    textAlign:'center',
                    
                
                }}>
                    <h1>{x.course}</h1>
                    <h2>{x.author}</h2>
                </div>
            ) })

        }
    </div>
  )
}

export default Read