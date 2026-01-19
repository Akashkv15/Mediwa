import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Userregister() {
       const[name,setName]=useState("")
          console.log(name);
          
        
          const[email,setEmail]=useState("")
          console.log(email);
        
          const[address,setAddress]=useState("")
          console.log(address);
        
          const[number,setNumber]=useState("")
          console.log(number);
          
          const[password,setPassword]=useState("")
          console.log(password);
        
          const[confirm,setConfirm]=useState("")
          console.log(confirm);
          
           const[profile,Setprofile]=useState("")
          console.log(profile);
          
          const navigate=useNavigate();
          const adduser=async(event)=>{
            event.preventDefault();
            if(password!==confirm){
                alert("password is not matching");
                return;
            }
            const body={name,address,email,password,number}
            console.log("c=",body);
            try{
                    const result =await axios.post('http://localhost:8000/api/user/userregister',body,
                       {
    
                  }
                    )
                    
                    console.log("d=",result);
                    alert(result.data.message)
                    console.log(result.data);
                    navigate('/Loginpage')     
            }
            catch(error){
                    alert(error.response.data.message)
                    
            }
          }
          const tologin=()=>{
                navigate('/Loginpage')
          }
  return (
   <>
    <div className='register'>
               
            <div className="form-container">
              <div className="form-wrapper">
                <div className="form-header">
                  <h2 id='h2'>User Register</h2>
                 
                </div>
                
                <div className="form-content">
                  <Form.Group className="form-group">
                    <Form.Label> Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name"  className="form-input" onChange={(e)=>setName(e.target.value)}/>
                  </Form.Group>
      
                  <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" className="form-input" onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Group>
      
                   <Form.Group className="form-group">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Phone Number " className="form-input" onChange={(e)=>setNumber(e.target.value)}/>
                  </Form.Group>
      
                   <Form.Group className="form-group">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Address"  className="form-input" onChange={(e)=>setAddress(e.target.value)}/>
                  </Form.Group>

                                  {/* <Form.Group className='fb'>
                  <Form.Label>Profile image</Form.Label>

                  <label className="custom-file">
                    Choose Image
                    <input
                      type="file"
                      hidden
                      onChange={(e) => setAddress(e.target.files[0])}
                    />
                  </label>
                </Form.Group> */}

      
                   <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password"  className="form-input" onChange={(e)=>setPassword(e.target.value)} />
                  </Form.Group>
      
                  <Form.Group className="form-group">
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Your Password" className="form-input"onChange={(e)=>setConfirm(e.target.value)}/>
                  </Form.Group>
                                 <h6 style={{fontFamily:`"Audiowide",san-serif`}}>Already Registered then login</h6>

                   <div style={{ display:'flex',flexDirection:'row',marginRight:"40px"}}>

                      <button className='submit-button'onClick={adduser} >Register</button>
                      <button className='submit-button'onClick={tologin} >Login</button>
                   </div>

                </div>
              </div>
            </div> 
          </div>
   </>
  )
}

export default Userregister