import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Editproduct() {
  const [data, setData] = useState({
    productname: "",
    price: "",
    quantity: "",
    category: "",
     description: ""
  })

  const { id } = useParams()

  const vieweditdata = async () => {
    try {
      const edit = await axios.get(
        `http://localhost:8000/api/product/edit/${id}`
      )

      setData(prev => ({
        ...prev,
        ...edit.data.products
      }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    vieweditdata()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const navigate=useNavigate()
  const update= async(event)=>{
    event.preventDefault()
    try{
      const update=await axios.put(`http://localhost:8000/api/product/updateproduct/${id}`,data)
      alert('product updated sucessfully')
    }
    catch(error){
      console.log(error);
      alert("update fail")
      
    }
  }

  return (
    <div className='div11' style={{ height: "750px" }}>
      <h1 style={{ padding: '20px' }}>Edit your Product</h1>

      <Form>
        <Form.Group className="forms">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productname"
            value={data.productname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="forms">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="forms">
          <Form.Label>Stock Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="forms">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="forms">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name=" description"
            value={data.description}
            onChange={handleChange}
          />
        </Form.Group>
        <button style={{marginLeft:'190px',backgroundColor:'rgba(1,167,150)',border:'none',padding:'15px',borderRadius:'15px'}} onClick={update}>Done</button>
      </Form>
    </div>
  )
}

export default Editproduct
