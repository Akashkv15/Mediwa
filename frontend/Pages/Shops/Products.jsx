import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
function Products() {
    const[data,setData]=useState([])
    const navigate=useNavigate();
      const id=localStorage.getItem("shop");
     const editproduct=async(id)=>{
         navigate(`/Shophome/Editproduct/${id}`)
     }
    const productsdetails=async()=>{
        try{

            console.log(id);
            const result=await axios.get(`http://localhost:8000/api/product/getproduct/${id}`)
            setData(result.data.products)
            console.log(result);
        }
        catch(error){
            console.log(error);
            
        }    
            
    }
    useEffect(()=>{
        productsdetails()
    },[])
//      const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

    const deleteproduct=async(id)=>{
        try{
            console.log(id);
            const deletedata=await axios.delete(`http://localhost:8000/api/product/delete/${id}`) 
            console.log(deletedata);
            productsdetails() 
            
        }
        catch(error){
            console.log(error);
            
        }
    }



  return (
    <>
  
    <div style={{height:'1000px'}} >
        <h1 style={{fontFamily:'"Audiowide",san-serif'}}>Your Products</h1>
        <div  className='product-card prodd'>

        {data.map((a,i)=>(
                <Card  style={{ width: '18rem',fontFamily:'"Caveat",cursive' ,marginTop:'10px' ,marginLeft:'20px'}}>
            <div>
            <Card.Body>
                <Card.Title><h2 style={{fontWeight:'bold'}}>
                    {a.productname}</h2></Card.Title>
                 <Card.Img variant="top"  style={{height:"250px"}}src={`http://localhost:8000/${a.profile}`} />
                <Card.Text>
                Price:{a.price} <br />
                Stock left:{a.quantity}
                </Card.Text>
                <Button style={{backgroundColor:"rgba(1,167,150)",border:'none'}} onClick={()=>{editproduct(a._id)}}>Edit</Button>
                <Button style={{backgroundColor:"rgba(1,167,150)",border:"none",marginLeft:'105px'}} onClick={()=>{deleteproduct(a._id)}}>Delete</Button>
            </Card.Body>
            </div>
            </Card>
        ))}
        </div>
    </div>
   

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}

export default Products