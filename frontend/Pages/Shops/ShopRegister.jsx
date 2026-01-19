import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function ShopRegister() {
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
      
    
      const navigate=useNavigate();
      const addmember =async(event)=>{
        event.preventDefault();
        if(password!==confirm){
              alert('password doesnt match')
              return;
        }
        
        const body ={name,email,password,address,number,confirm}
        console.log(body)
        try{
            const result=await axios.post('http://localhost:8000/api/shop/shopregister',body)
            console.log(result);
           
            alert(result.data.message);
            // console.log(result.data);
            navigate('/Loginpage')
          }

        catch(error){
          console.log(error)
          alert(error.response.data.message)
         
        }}
        const login =()=>{
          navigate('/Loginpage')
        }
  return (
   <>
      <div className='register'>
           
         <div className="form-container">
           <div className="form-wrapper">
             <div className="form-header">
               <h2 id='h2'>Shop Register</h2>
              
             </div>
             
             <div className="form-content">
               <Form.Group className="form-group">
                 <Form.Label> Name</Form.Label>
                 <Form.Control type="text" placeholder="Enter Your Name"  className="form-input" value={name} onChange={(e)=>setName(e.target.value)} />
               </Form.Group>
   
               <Form.Group className="form-group">
                 <Form.Label>Email</Form.Label>
                 <Form.Control type="email" placeholder="Enter Your Email" className="form-input"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </Form.Group>
   
                <Form.Group className="form-group">
                 <Form.Label>Number</Form.Label>
                 <Form.Control type="number" placeholder="Enter Your Phone Number " className="form-input" value={number} onChange={(e)=>setNumber(e.target.value)} />
               </Form.Group>
   
                <Form.Group className="form-group">
                 <Form.Label>Address</Form.Label>
                 <Form.Control type="text" placeholder="Enter your Address"  className="form-input" value={address} onChange={(e)=>setAddress(e.target.value)} />
               </Form.Group>
   
                <Form.Group className="form-group">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Enter your password"  className="form-input" value={password} onChange={(e)=>setPassword(e.target.value)} />
               </Form.Group>
   
               <Form.Group className="form-group">
                 <Form.Label>Confirm</Form.Label>
                 <Form.Control type="password" placeholder="Confirm Your Password" className="form-input" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
               </Form.Group>
              <div >
               <h6 style={{fontFamily:`"Audiowide",san-serif`}}>Already Registered then login</h6>
               <div style={{ display:'flex',flexDirection:'row',marginRight:"40px"}}>
                
                      <button className='submit-button' onClick={addmember} style={{width:'140px'}}>Register</button>
                       <button className='submit-button'onClick={login}style={{width:'140px'}} >Login</button>
               </div>

              </div>
               
             </div>
           </div>
         </div> 
       </div>
   </>
  )
}

export default ShopRegister