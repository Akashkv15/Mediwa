import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Navbarsection from '../../Combonents/Navbarsection'
import Addproducts from './Addproducts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Addproduct() {
            const[productname,setProductName]=useState("")
            // console.log(productname);
            const[price,setPrice]=useState("")
            // console.log(price);
            const[quantity,setQuantity]=useState("")
            // console.log(quantity);
            const[profile,Setprofile]=useState("")
            // console.log(profile);
            const[description,Setdescription]=useState("")
            // console.log(description);
            const[category,Setcategory]=useState("")
            
            // console.log(category);
            const navigate=useNavigate();
            const id=localStorage.getItem("shop")
    const addproduct=async(event)=>{
      event.preventDefault()
      console.log("heloo");
      
           try{
              const data=new FormData();
              data.append('productname',productname);
              data.append('price',price);
              data.append('quantity',quantity);
              data.append('image',profile)
              data.append('description',description)
              data.append('category',category)
              const responce=await axios.post(`http://localhost:8000/api/product/addproduct/${id}`,data,
                 {
                  headers:{
                    "content-type":"multipart/form-data",
                  },
                  }
              )
              console.log(responce,"hi");
              
              alert(responce.data.message)
           }

           catch(error){
              console.log(error);
              
           }
    }
  return (
    <div>
        {/* <Navbarsection></Navbarsection> */}
       {/* <div className='div10' style={{}}>
             <div className='div1'>
           <div className='div2' style={{height:'800px'}}>
  <button className="side-btn">
    <i className="bi bi-graph-up-arrow"></i> Dashboard
  </button>

  <button className="side-btn">
    <i className="bi bi-person-fill"></i> Profile
  </button>

  <button className="side-btn">
    <i className="bi bi-bag-plus-fill"></i> Add Product
  </button>

  <button className="side-btn">
    <i className="bi bi-clipboard2-plus"></i> Orders
  </button>

  <button className="side-btn">
    <i className="bi bi-boxes"></i> Products
  </button>
</div> */}

{/* </div> */}
                <div className='div11'>
                        <h1 style={{padding:'20px'}}>Add Products</h1>
                        <Form>
                                <div style={{  gap: '50px', marginTop: '25px' }}>
                                <Form.Group className="forms">
                                     <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                                                       Product Name
                                    </Form.Label>
                                  <Form.Control type="text" placeholder="Enter your product name" value={productname} onChange={(e)=>setProductName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="forms">
                                     <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                                                       Price
                                    </Form.Label>
                                  <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                                </Form.Group>
                                 <Form.Group className="forms">
                                     <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                                                       Stock Quantity
                                    </Form.Label>
                                  <Form.Control type="text" placeholder="Enter Stock Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                </Form.Group>
                                 <Form.Group className="forms">
                                     <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                                                      Category
                                    </Form.Label>
                                  <Form.Control type="text" placeholder="Enter  Category" value={category}onChange={(e)=>Setcategory(e.target.value)}/>
                                </Form.Group>
                                 <Form.Group className="forms">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Profile
                </Form.Label>
                <Form.Control type="file" onChange={(e)=>Setprofile(e.target.files[0])}/>
              </Form.Group>
              <Form.Group className="forms">
                                     <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                                                      Discription
                                    </Form.Label>
                                  <Form.Control type="text" placeholder="Enter  Product Description" value={description} onChange={(e)=>Setdescription(e.target.value)}/>
                                </Form.Group>
            </div>
            </Form>
            <button style={{border:'none',padding:'15px',marginLeft:'35%', fontFamily:'"Caveat",cursive',backgroundColor:'rgba(1,167,150)',borderRadius:'20px',width:'100px'}} onClick={addproduct}>Done</button>
                </div>
   </div>
    // </div>
  )
}

export default Addproduct