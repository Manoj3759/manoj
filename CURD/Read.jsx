import React,{useState,useEffect} from 'react'
import axiosInstance from './../helper/axiosInstance';
import { Link } from 'react-router-dom';
import "../CURD/Style/read.css"

const Read = () => {
    let[data,setData]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get('/posts')
            setData(data)
        }
        fetchData()
    },[])
    let deleteData = async(id)=>{
        await axiosInstance.delete(`/posts/${id}`)
        window.location.assign('/view')

    }
  return (
    <div style={{
        display:'flex',
        gap:'5px',
        flexWrap:'wrap'
    }}>
        {
            data.map((x)=>{ return(
                <div className='card'>
                    <h1>{x.course}</h1>
                    <h2>{x.author}</h2>
                    <Link to={`/update/${x.id}`}>UPDATE</Link>
                <button onClick={()=>{
                    deleteData(x.id)
                }}>DELETE</button>
                </div>
            ) })

        }
    </div>
  )
}

export default Read