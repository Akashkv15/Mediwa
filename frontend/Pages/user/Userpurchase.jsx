    import axios from 'axios';
    import React, { useEffect, useState } from 'react'
    import { use } from 'react';
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import { Form } from 'react-bootstrap';
    // import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
    import { useNavigate } from 'react-router-dom';
    function Userpurchase() {
      const[data,setdata]=useState([])
      const navigate=useNavigate()
      const viewuserproducts =async()=>{
        try{
            const fetchproducts=await axios.get('http://localhost:8000/api/product/userproducts')
            setdata(fetchproducts.data.userproducts)
        }
        catch(error){
          console.log(error);
          
        }
      }
      useEffect(()=>{
        viewuserproducts()
      },[])
      // const order=async(id)=>{
      //   console.log("clicked product id=",id);
        
      //   navigate(`/userhome/userorder/${id}`)
      // }
      const [show, setShow] = useState(false);
      const[productid,setProductid]=useState('')
      const [quantity, setQuantity] = useState('');
      const [address, setAddress] = useState('');
      const handleShow = (id) => {
        setProductid(id)
        setShow(true)};
      const handleClose = () => {
        setShow(false)
        setAddress('')
        setQuantity('')
      };
      const placeholder=async()=>{  
        try{
          const userid = localStorage.getItem("userid");
          console.log("ordered person id=",userid);
          
        const res= await axios.post(`http://localhost:8000/api/order/create/${userid}`,{
            productid,quantity,address
          })
          alert("Product ordered successfully")
          handleClose();
          const orderId = res.data.order._id; // ← Get order ID from backend response
          console.log("order id=",orderId);
          
        navigate(`/userhome/userorder/${orderId}`);
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
        <div style={{height:'1000px'}}>
          <div style={{display:'flex'}}>

          <h1 style={{fontFamily:'"Audiowide"'}}>Order Your Products</h1>
            <button style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'10px',
              fontFamily:'"Caveat",cursive',borderRadius:'10px',marginLeft:'670px',marginBottom:'10px',marginTop:'10px'
            }} onClick={profile}>Profile</button>
            </div>
        <div style={{display:'flex', flexDirection:'row' ,gap:'20px', flexWrap:'wrap'}} >

          

            {data.map((item)=>(

              <Card style={{ width: '18rem', height:'26rem',fontFamily:'"Caveat",cursive'}}>
          <Card.Img variant="top" style={{height:'15rem'}}src={`http://localhost:8000/${item.profile}`} />
          <Card.Body>
            <Card.Title>{item.productname}</Card.Title>
            <Card.Title>Price:{item.price}</Card.Title>
            <Card.Title>Stock:{item.quantity}</Card.Title>
            <Card.Text>
            
            </Card.Text>
    <Button onClick={()=>handleShow(item._id)}> Order</Button>
          </Card.Body>
        </Card>
        ))}
          

            
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{fontFamily:'"Audiowide"'}}>Place Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
      <Form>
        {/* Quantity */}
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: '600' }}>
            Quantity
          </Form.Label> 
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            style={{
              borderRadius: '10px',
              padding: '10px',
              boxShadow: 'none'
            }}
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
          />
        </Form.Group>

        {/* Address */}
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: '600' }}>
            Delivery Address
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
            style={{
              borderRadius: '10px',
              padding: '10px',
              resize: 'none'
            }}
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button style={{backgroundColor:"rgba(1,167,150)",border:'none'}} onClick={placeholder}>
                Place Your Order
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
        </div>
        
        </>
      )
    }

    export default Userpurchase