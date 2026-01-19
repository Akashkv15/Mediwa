import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Editprofile() {

  const id=localStorage.getItem("userid")
  const [image, setImage] = useState(null)

  console.log("chandras id=",id);
  
  const[data,setData]=useState(
    {name:"",
      email:"",
      number:"",
      address:"",
      photo:"",
    }
  )
  const viewuserdata=async()=>{
    try{
        const res=await axios.get(`http://localhost:8000/api/user/userdata/${id}`)
        setData(res.data.profile)
        
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(()=>{
    viewuserdata()
  },[id])
    const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const updateuserprofile =async(e)=>{
    e.preventDefault()
    const formData=new FormData()
        formData.append("userid", id)
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("number", data.number)
    formData.append("address", data.address)

    // append image only if selected
    if (image) {
      formData.append("photo", image)
    }
    try{
        await axios.put(`http://localhost:8000/api/user/updateuserprofile`,formData,{
           headers: {
            "Content-Type": "multipart/form-data"
        }})
        alert("profile updated ")
        viewuserdata()
    }
    catch(error){
      console.log(error);
      alert("updataion failed")
    }
  }
  return (
    <div>
        {/* <h1 style={{fontFamily:'"Audiowide",san-serif'}}>Edit Your Profile</h1> */}
          <div className='div11' style={{ height: "800px" }}>
      <h1 style={{ padding: '20px' }}>Edit your Profile</h1>

      <Form>
          {data?.photo && (
                 <img
                   src={`http://localhost:8000/uploads/${data?.photo}`}
                   alt="profile"
                   width="150"
                   height="150"
                   style={{ borderRadius: "50%" ,marginLeft:'110px',marginBottom:'25px'}}
                 />
               )}
        <Form.Group className="forms">
          <Form.Label>Profile Name</Form.Label>
          <Form.Control
            type="text"
            name='name'
            value={data.name}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group className="forms">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name='email'
            value={data.email}
            onChange={handleChange}
          />
        </Form.Group> */}

        <Form.Group className="forms">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            name='number'
            value={data.number}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="forms">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name='address'
            value={data.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="forms">
          <Form.Label></Form.Label>
          <h6>Profile photo</h6>
     <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

        </Form.Group>
        <button style={{marginLeft:'160px',backgroundColor:'rgba(1,167,150)',border:'none',padding:'15px',borderRadius:'15px'}}onClick={updateuserprofile} >Done</button>
      </Form>
    </div>
    </div>
  )
}

export default Editprofile