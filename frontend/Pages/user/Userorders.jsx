import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Alert } from 'react-bootstrap';
import Navbarsection from '../../Combonents/Navbarsection';

function Userorders() {
    // const {id}=useParams()
    // console.log("orderedproduct=",productid);
    
    // const[products,setProduct]=useState(null)
    const userid = localStorage.getItem("userid")
    console.log("idddd=",userid);
    
    const[order,setOrder]=useState()
    const orderproduct=async()=>{
        try{
const res = await axios.get(
  `http://localhost:8000/api/order/orderproduct/${userid}`
);
                setOrder(res.data)
                console.log("api responce=",res.data);
               
             
  
        }
        catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        orderproduct()
    },[userid])
    const cancelorder= async(userid)=>{
      try{
          const res= await axios.put(`http://localhost:8000/api/order/cancelorder/${userid}`)
          alert("order cancelled")
          // orderproduct()
             setOrder((prev) =>
      prev.map((item) =>
        item._id === userid ? { ...item, status: "cancelled" } : item
      ),
      // orderproduct()
    );
      }
      catch(error){
        console.log(error);
        
      }
    }
    
    const profile =()=>{
    navigate("profile")
  }
    return (
      <>
      {/* <Navbarsection></Navbarsection> */}
      <div>

      <div >
         <button style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'10px',
              fontFamily:'"Caveat",cursive',borderRadius:'10px',marginTop:'10px',marginLeft:'1150px',marginBottom:'10px'
            }} onClick={profile}>Profile</button>
      </div>
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',gap:'15px',marginBottom:'150px',marginLeft:'20px'}}>
        
   {order?.map((item) => (
     
     <Card style={{ width: "18rem", fontFamily:'"Caveat",cursive'}}>
    <Card.Img variant="top"  style={{height:"25rem"}}src={`http://localhost:8000/${item.productid.profile}` } />
    <Card.Body>
      <Card.Title>{item.productid.productname}</Card.Title>
      <Card.Text>
        Quantity: {item.orderquantity} <br />
        Address: {item.orderaddress} <br />
        Total Amount:{item.totalprice} <br />
        status:{item.status} <br />

            {/* Cancel button */}
            <button
              disabled={item.status!=="pending"}
              onClick={() => cancelorder(item._id)}
              style={{
                backgroundColor: "#01a796",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: "5px",
                cursor: item.status !== "pending" ?"not-allowed": "pointer",
              }}
            >
              {item.status === "cancelled" ?"Cancelled":"Cancel Order"}
            </button>
      </Card.Text>
    </Card.Body>
  </Card>
))}
      </div>

        </div>
</>
  )
}

export default Userorders