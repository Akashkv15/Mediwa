import React, { useEffect, useState } from 'react'
import Navbarsection from '../../Combonents/Navbarsection'
import axios from 'axios'

function Doctordashboard() {
    const[data,setData]=useState([])
    const id=localStorage.getItem("doctorid")
    const getdoctordata=async()=>{
        try{
             const result=await axios.get(`http://localhost:8000/api/doctor/getprofile/${id}`)
             setData(result.data.doctor)
        }
        catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{getdoctordata()},[])
  return (
    <>
    {/* <Navbarsection></Navbarsection> */}
     {/* <div className='div1'> */}
          
          <div className='div3'>
            <h1 style={{marginLeft:'10px',fontWeight:'bold', fontFamily: "Josefin Sans, sans-serif",marginTop:'10px'}}>Welcome back {data.name} </h1>
            </div>
{/* </div> */}
    </>
  )
}

export default Doctordashboard