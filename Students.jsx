import React from 'react'

const Students = (props) => {
    let data=props.data
  return (
    <table border="2px" style={{textAlign:"center"}}>
    <tr>
        <th>StudentName</th>
        <th>RollNo</th>
        <th>DOB</th>
        <th>PhoneNo</th>
        <th>YOP</th>
        <th>Photo</th>
    </tr>
    {data.map((data)=>{
        return(
            <tr>
            <td>{data.studentnamer}</td>
            <td> {data.rollno}</td>
            <td>{data.dob}</td>
            <td>{
                <ol>{data.phone.map((x)=>{
                return(
                    <li>{x}</li>
                )
            })}</ol>}</td>
            <td>{data.YOP}</td>
            <td><img src={data.photo} alt="" width="50px" height="50px" /></td>
            </tr>
        )
    })}
    </table>
  )
}

export default Students