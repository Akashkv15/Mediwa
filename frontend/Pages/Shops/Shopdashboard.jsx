import React, { useEffect, useState } from 'react'
import Navbarsection from '../../Combonents/Navbarsection'
import Card from 'react-bootstrap/Card';
import { Outlet, useNavigate } from 'react-router-dom';
import Addproduct from './Addproduct';
import axios from "axios";

function Shopdashboard() {
  const navigate=useNavigate()
  const[data,setData]=useState([])
  const id=localStorage.getItem("shopid")
  console.log("shopers=",id);
  const shopid=localStorage.getItem("shop")
  console.log("shopid=",shopid);
  
    
    const getdata=async()=>{
      try{
        
        // console.log(id);
        const result = await axios.get(`http://localhost:8000/api/shop/getprofile/${id}`)
        localStorage.setItem("shop",result.data.shop._id)     
        setData(result.data.shop)
        console.log(result.data.shop);
        
      }
      catch(error){
        console.log(error);
        
      }
      
    }
   useEffect(()=>{ getdata()
  },[])
  const[status,setStatus]=useState("")
  const[totalorder,setTotalorder]=useState("")
  const[totalproduct,setTotalproduct]=useState("")
  const[pending,setPending]=useState("")
  const shopdashboarddata=async()=>{
    try{

      const res=await axios.get(`http://localhost:8000/api/shop/dash/${shopid}`)
      setStatus(res.data.produc)
      setTotalorder(res.data.totalrevenue)
      setTotalproduct(res.data.prod)
      setPending(res.data.pendingCount)
      console.log("pe=",res.data.pendingCount);
      
      console.log(res.data.totalrevenue);
      console.log(res.data.prod);
      
      console.log(res.data);
      
    
      
    }
    catch(error)
    {
      console.log(error);
      
    }
  }
  useEffect(()=>
  {
    shopdashboarddata()
  },[])
  return (
    <>


          <div className='div3'>
            <h1 style={{marginLeft:'10px',fontWeight:'bold', fontFamily: "Josefin Sans, sans-serif",marginTop:'10px'}}>Welcome back {data.name}</h1>
            <div className='subdiv'>
             <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body style={{fontFamily:'"Caveat",cursive'}}>
                <Card.Text className="card-row">
                  <i className="bi bi-graph-up-arrow card-icon"></i>
                  <div className="card-texts">
                    <h1>{totalorder} ₹</h1>
                    <h6>Total Revenue</h6>
                  </div>
                </Card.Text>
              </Card.Body>
       </Card>
          <Card style={{ width: '18rem' ,fontFamily:'"Caveat",cursive'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        
        <Card.Text className="card-row">
                  <i className="bi bi-cart-check card-icon"></i>
                  <div className="card-texts">
                    <h1>{status}</h1>
                    <h6>Total Orders</h6>
                  </div>
                </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
       </Card>
         <Card style={{ width: '18rem',fontFamily:'"Caveat",cursive' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        
       <Card.Text className="card-row">
                  <i className="bi bi-boxes card-icon"></i>
                  <div className="card-texts">
                    <h1>{totalproduct}</h1>
                    <h6>Products</h6>
                  </div>
                </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
       </Card>
         <Card style={{ width: '18rem',fontFamily:'"Caveat",cursive' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body style={{fontFamily:'"Caveat",cursive'}}>
        
        <Card.Text className="card-row">
                  <i className="bi bi-clock-history card-icon"></i>
                  <div className="card-texts">
                    <h1>{pending}</h1>
                    <h6>Pendibg Orders</h6>
                  </div>
                </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
       </Card>
       </div>
          </div>
    
    
    </>
  )
}

export default Shopdashboard