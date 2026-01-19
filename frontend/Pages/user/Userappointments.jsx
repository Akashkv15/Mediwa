import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Userappointments() {
  const id=localStorage.getItem("User")
  console.log("userrrr=",id);
  const [data,setData]=useState([])
  const navigate=useNavigate()
  const viewbookeddr=async()=>{
    try{
        const res=await axios.get(`http://localhost:8000/api/doctor/viewbookeddr/${id}`)
        setData(res.data)
        console.log("appointed dr=",res.data);
        
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(()=>{
    viewbookeddr()
  },[])
  const cancelbooking=async(bookingid)=>{
    try{
        const res=await axios.delete(`http://localhost:8000/api/doctor/cancelbook/${bookingid}`);
        alert("Booking cancel")
        viewbookeddr()
    }
    catch(error){
      console.log(error);
      
    }
  }
  const profile =()=>{
    navigate("/userhome/profile")
  }
  return (
    <>
    <div>
    <div style={{display:'flex'}}>

    <h1 style={{fontFamily:'Audiowide'}}>Your Bookings</h1>
     <button style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'10px',
              fontFamily:'"Caveat",cursive',borderRadius:'10px',marginLeft:'825px',marginBottom:'10px',marginTop:'10px'
            }} onClick={profile}>Profile</button>
            </div>
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'25px'}}>
      {data.map((item)=>(
        <Card style={{ width: '18rem' ,fontFamily:'"Caveat",cursive' }}>
      <Card.Img variant="top" height={'250px'} src={`http://localhost:8000/${item.doctorid.profile}`} />
      <Card.Body>
        {/* <Card.Title><h3></h3></Card.Title> */}
        <Card.Text>
        <h5>Doctor Name:{item.doctorid.name}</h5>
        <h5>Date:{item.date.slice(0,10)}</h5>
        <h5>Number:{item.phone}</h5>
        <h5>Patient Name:{item.patientname}</h5>
        <h5>Token Number:{item.tockennumber}</h5>
        <h5>Status:{item.status || 'pending'}</h5>
        </Card.Text>
<Button
  disabled={item.status === 'approved'}
  style={{
    backgroundColor: item.status === 'approved' ? 'gray' : 'rgba(0,157,160)',
    border: 'none',
    cursor: item.status === 'approved' ? 'not-allowed' : 'pointer'
  }}
  onClick={() => cancelbooking(item._id)}
>
  {item.status === 'approved' ? 'Approved' : 'Cancel Booking'}
</Button>   </Card.Body>
    </Card>
))}
    </div>
</div>
</>
  )
}

export default Userappointments