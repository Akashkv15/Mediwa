import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Shoporders() {
    const shopid=localStorage.getItem("shop")
    console.log("shopid=",shopid);
    
    const[data,setData]=useState([])
    const fetchproducts=async()=>{
        try{

            const res=await axios.get(`http://localhost:8000/api/order/orderproduct/shop/${shopid}`)
            console.log(res.data);
            setData(res.data)
        }
        catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        fetchproducts()
    },[shopid])
    const approveOrder = async(id) => {
  try {
    await axios.put(`http://localhost:8000/api/order/approveorder/${id}`);
    alert("Order Approved!");
     setData((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status: "approved" } : item
      )
    );
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
    <div >
        <h1 style={{fontFamily:'"Audiowide",san-serif'}}>You have orders</h1>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginBottom:'150px',gap:'15px'}}>
       
          {data?.map((item) => (
              <Card style={{ width: "18rem", display:'flex',flexWrap:'wrap',flexDirection:'row',fontFamily:'"Caveat",cursive'}}>
    <Card.Img variant="top"  style={{height:"25rem"}}src={`http://localhost:8000/${item?.productid?.profile}` } />
    <Card.Body>
      <Card.Title>{item?.productid?.productname}</Card.Title>
      <Card.Text>
        Quantity: {item?.orderquantity} <br />
        Address: {item?.orderaddress} <br />
        Total Amount:{item?.totalprice}<br/>
        Status:{item.status} <br />      

              <Button
                disabled={item.status!=="pending"}
                onClick={() => approveOrder(item._id)}
              >
                {item.status === "approved" ? "Approved":"Approve"}
              </Button>
      </Card.Text>
    </Card.Body>
  </Card>
))}
</div>

    </div>
</>
  )
}

export default Shoporders