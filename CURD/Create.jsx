import React,{useState} from 'react'
import axiosInstance from '../helper/axiosInstance'
import "../CURD/Style/create.css"

const Create = () => {
    let [course,setCourse]=useState('')
    let [author,setAuthor]=useState('')


    let handleClick=async(e)=>{
        e.preventDefault()
       try {
        let payload={
          course,
          author
        }
        console.log(payload);
        let data= await axiosInstance.post('/posts',payload)
       } catch  {
        console.log("Error");
       }
       window.location.assign('/')
    }
  return (
    <>
    <form action="">
      <fieldset>
        <legend>CREATE POST</legend>
      <label htmlFor="course">CourseName: </label>
         <input type="text" id='course' onChange={(e)=>{
            setCourse(e.target.value)
               }} /> <br /><br />
          <label htmlFor="author">AuthorName: </label>
            <input type="text" id='author' onChange={(e)=>{
                 setAuthor(e.target.value)
               }} /> <br />
           <button onClick={handleClick}>Submit</button>
       </fieldset>
    </form>
    </>
  )
}

export default Create