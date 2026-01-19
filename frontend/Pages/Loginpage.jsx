import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
function Loginpage() {
  const [username,Setusername]=useState("")
  const[password,SetPassword]=useState("")
  const navigate=useNavigate()
const login=async(event)=>{
  const body={username,password}
  console.log(body);
  
  event.preventDefault();
  try{
      const result=await axios.post('http://localhost:8000/api/login',body)
      const role=result.data.usr.role
      console.log("a=",result);
      if(role=="user"){
        localStorage.setItem('userid',result.data.usr._id)
        navigate('/userhome')
      }
      else if(role=='shop'){
          localStorage.setItem("shopid",result.data.usr._id);
          navigate('/Shophome')
      }
      else if(role=='doctor'){
        navigate('/doctorhome')
        localStorage.setItem("doctorid",result.data.usr._id)
      }
      else if(role=='Admin'){
        navigate('/adminpage')
      }
  }
  catch(error){
        console.log(error);
        alert(error.response.data.message)
  }
}
  return (
    <>
      <div>

              <div className="form-container">
                <div className="form-wrapper">
                  <div className="form-header">
                    <h1 id='h1'>Welcome To Mediwa</h1>
                    <h5 id='h5'>Login</h5>
                   
                  </div>
                  
                  <div className="form-content">
                   
        
                    <Form.Group className="form-group">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your username" className="form-input" onChange={(e)=>Setusername(e.target.value)}/>
                    </Form.Group>
        
                    <Form.Group className="form-group">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter your password"  className="form-input" onChange={(e)=>SetPassword(e.target.value)} />
                    </Form.Group>

                   
                    <h6>Dont have an account ,then <Link to='/Register'style={{color:'inherit',textDecoration:'none'}}>Click Here</Link></h6>
                    <button className='submit-button1' onClick={login}>Login</button>
                  </div>
                </div>
              </div> 


      </div>
    </>
    )
}

export default Loginpage