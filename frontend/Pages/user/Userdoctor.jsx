import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
function Userdoctor() {
  const[data,setData]=useState([])
  const [selectedDoctorId, setselectedDoctorId] = useState(null);
  const [patientname, setPatientname] = useState("");
  const[date,setDate]=useState("");
  const[phone,setPhone]=useState("")
  const viewdr=async()=>{
    try{
        const view=await axios.get('http://localhost:8000/api/doctor/viewdoctor')
        setData(view.data)
        console.log("data=",view.data);
        
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(()=>{
    viewdr()
  },[])
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id=localStorage.getItem('User')
  // console.log("booking user id=",id);
  const bookyourdr=async()=>{
    console.log("ccc==",selectedDoctorId);
    
    try{
      if (!selectedDoctorId) {
// alert("Doctor ID not found. Please select a doctor again.");
return;
}
        const res=await axios.post(`http://localhost:8000/api/doctor/bookingdr/${selectedDoctorId}`,{
          id,
          patientname,
          date,
          phone}
        )

        alert("doctor booked sucessfully")
          setPatientname("");
      setDate("");
      setPhone("");
      setselectedDoctorId(null);
      handleClose();
      viewdr()
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
    <div> 
      <div style={{display:'flex'}}>

       <h1 style={{fontFamily:'Audiowide'}}>Doctor's List</h1>
       <button style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'10px',
              fontFamily:'"Caveat",cursive',borderRadius:'10px',marginLeft:'790px',marginBottom:'10px',marginTop:'10px'
            }} onClick={profile}>Profile</button>
            </div>
       <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
      {data.map((item)=>(
         <Card style={{ width: '18rem',fontFamily:'"Caveat",cursive'}}>
      <Card.Img variant="top" style={{height:'255px'}} src={`http://localhost:8000/${item?.profile}`} />
      <Card.Body>
        <Card.Title>Name:{item.name}</Card.Title>
        <Card.Text>
          <h5>Qualification:{item.qualification}</h5>
          <h5>Clinic:{item.clinicname}</h5>
          <h5>Clinic Location:{item.clinicaddress}</h5>
          <h5>Token's Available:{item.token}</h5>
        </Card.Text>
        <Button style={{backgroundColor:'rgba(1,157,160)',border:'none'}} onClick={()=>{
          console.log("Selecting doctor ID:", item._id);
          setselectedDoctorId(item._id);handleShow()}}>
          Book Your Dr</Button>
      </Card.Body>
    </Card>
        ))}
        </div>
    </div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Your Doctor</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
                   <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: '600' }}>
                              Patient Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Patient name "
                              value={patientname}
                              onChange={(e)=>setPatientname(e.target.value)}
                              style={{
                                borderRadius: '10px',
                                padding: '10px',
                                boxShadow: 'none'
                              }}
                              
                            />
                            <Form.Label style={{ fontWeight: '600' }}>
                              Enter Date
                            </Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Enter Patient name "
                              value={date}
                              onChange={(e)=>setDate(e.target.value)}
                              style={{
                                borderRadius: '10px',
                                padding: '10px',
                                boxShadow: 'none'
                              }}
                              
                            />
                            <Form.Label style={{ fontWeight: '600' }}>
                              Phone number
                            </Form.Label>
                            <Form.Control
                              type="number"
                              value={phone}
                              onChange={(e)=>setPhone(e.target.value)}
                              placeholder="Enter phone number "
                              style={{
                                borderRadius: '10px',
                                padding: '10px',
                                boxShadow: 'none'
                              }}
                              
                            />
                            
                          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>bookyourdr()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
  )
}

export default Userdoctor