import React, { useEffect, useState } from 'react'
import Navbarsection from '../../Combonents/Navbarsection'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Userdashboard() {
  const[data,setData]=useState([])
  const id=localStorage.getItem("userid")
  console.log(id);
  
  const getuserdata= async()=>{
    try{

      const result= await axios.get(`http://localhost:8000/api/user/getprofile/${id}`)
      console.log(id);
      setData(result.data.user)
      console.log(result.data.name);
      
    }
    catch(error){
        console.log(error);
        
    }
  }
  useEffect(()=>{getuserdata()

  },[])
  const navigate=useNavigate()
  const toeditprofile=()=>{
    navigate('editprofile')
  }
    const profile =()=>{
    navigate("/profile")
  }
  return (
    <>
  

          <div className='div3'>
            <div style={{display:'flex',flexDirection:'row'}}>

            <h1 style={{marginLeft:'10px',fontWeight:'bold', fontFamily: "Josefin Sans, sans-serif",marginTop:'10px'}}>Welcome Back {data.name}</h1>
            <button style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'10px',
              fontFamily:'"Caveat",cursive',borderRadius:'10px',marginTop:'10px',marginLeft:'700px'
            }} onClick={profile}>Profile</button>
            </div>
            <div className='subdiv'>
             <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
                <Card.Text className="card-row">
                  <i className="bi bi-person-circle card-icon"></i>
                  <div className="card-texts">
                    <h1 style={{fontFamily:"Josefin Sans,sans-serif"}}>{data.name}</h1>
                   <button id='b1' style={{padding:'5px'}} onClick={toeditprofile}>Edit Profile</button>
                  </div>
                </Card.Text>
              </Card.Body>
       </Card>
          {/* <Card style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Text className="card-row">
                  <i className="bi bi-cart-check card-icon"></i>
                  <div className="card-texts">
                    <h1>0</h1>
                    <h6>Total Orders</h6>
                  </div>
                </Card.Text>
        </Card.Body>
       </Card> */}
         {/* <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
       <Card.Text className="card-row">
                  <i className="bi bi-boxes card-icon"></i>
                  <div className="card-texts">
                    <h1>0</h1>
                    <h6>Products</h6>
                  </div>
                </Card.Text>
       
        </Card.Body>
       </Card> */}
         {/* <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        
        <Card.Text className="card-row">
                  <i className="bi bi-clock-history card-icon"></i>
                  <div className="card-texts">
                    <h1>0</h1>
                    <h6>Pendibg Orders</h6>
                  </div>
                </Card.Text>
        
        </Card.Body>
       </Card> */}
       </div>
          </div>
    
    </>
  )
}

export default Userdashboard