import React from 'react'
import Navbarsection from './Navbarsection'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Frontpage() {
    const navigate =useNavigate()
    const nav=async()=>{
        navigate('/ShopRegister')
    }
    const usenav=async()=>{
        navigate('/Userregister')
    }
    const doctornav=async()=>{
      navigate('/Doctorregister')
    }
     const navi=()=>{
    navigate('/Loginpage')
  }
  return (
    <>
    {/* <Navbarsection></Navbarsection> */}
    <div className='mainh1'>

    <div className='h1'>
                <h1>Welcome to Mediwa who are you..?</h1>
                <br />
                
              
    </div>
    <button style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'15px',borderRadius:'15px',
      fontFamily:'"Audiowide"'
    }} onClick={navi}>Login</button>
    <div className='cardsh1'>
          <Card style={{ width: '18rem' ,borderRadius:'20px',backgroundColor: 'rgba(12, 206, 51, 1)',border:'none',color:'white',cursor:'pointer'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body onClick={usenav}>
                <Card.Text className="card-row">
                  <i className="bi bi-person-circle card-icon"style={{backgroundColor: 'rgb(12, 206, 51,1)',border:'2px solid white',color:'white'}}></i>
                  <div className="card-texts">
                    <h1>User</h1>
                    
                  </div>
                </Card.Text>
              </Card.Body>
       </Card>
       <Card style={{ width: '18rem' ,borderRadius:'20px',backgroundColor: 'rgba(0, 38, 255, 1)',color:'white',cursor:'pointer'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body onClick={nav}>
                <Card.Text className="card-row">
                  <i className="bi bi-bag card-icon"style={{backgroundColor:'rgba(0,38,255,1)',color:'white',border:'2px solid'}}></i>
                  <div className="card-texts">
                    <h1>Shop</h1>
                   
                  </div>
                </Card.Text>
              </Card.Body>
       </Card>
       <Card style={{ width: '18rem' ,backgroundColor:'rgba(255, 14, 22, 1)',border:'none',borderRadius:'20px',color:'white',cursor:"pointer"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body onClick={doctornav}>
                <Card.Text className="card-row">
                  <i className="bi bi-activity card-icon" style={{backgroundColor:'rgba(255,14,22,1)',border:'2px solid white',color:'white'}}></i>
                  <div className="card-texts">
                    <h1>Doctor</h1>
                    
                  </div>
                </Card.Text>
              </Card.Body>
       </Card>
    </div>
    </div>
    </>
  )
}

export default Frontpage