import React, { useEffect, useState } from 'react'
import Navbarsection from '../Combonents/Navbarsection'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Adminpage() {
  const[doctors,setDoctor]=useState([])
  const fetchdoctors=async()=>{
      try{
          
          const doctordata=await axios.get('http://localhost:8000/api/doctor/getdoctor/')
          setDoctor(doctordata.data)
          console.log("doctordata=",doctordata.data);
          
      }
      catch(error)
      {
        console.log(error);
        
      }
  }
  useEffect(()=>{
    fetchdoctors()
  },[])
  const approvedoctor=async(id)=>{
      const doctorid=id
      console.log(doctorid);
     
      const res=await axios.put(`http://localhost:8000/api/doctor/approvedoctor/${doctorid}`)
      alert("doctor approved")
      fetchdoctors();
  }
  return (
    <>
    <Navbarsection></Navbarsection>
    <div>
        <h1 style={{fontFamily:'"Audiowide",san-serif'}}>Welcome Admin</h1>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
          {doctors?.map((item)=>(

            <Card style={{ width: '18rem' ,fontFamily:'"Caveat",cursive'}}>
      <Card.Img variant="top" style={{height:'310px'}}src={`http://localhost:8000/${item.profile}`}/>
      <Card.Body>
        <Card.Title>Doctor Name:{item.name}</Card.Title>
        <Card.Text>
            <h5>Qualification:  {item.qualification}</h5>
            <h5>Email: {item.email}</h5>
        </Card.Text>
        <Button variant="primary" onClick={()=>approvedoctor(item._id)}>{item.status==="pending"?"Pending":"Approved"}</Button>
      </Card.Body>
    </Card>
          ))}

        </div>
    </div>
    </>
  )
}

export default Adminpage