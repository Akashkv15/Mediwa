import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Bookings() {
    const[data,setData]=useState([])
    const [selectedDate, setSelectedDate] = useState('');

    const id=localStorage.getItem('doctorprofileid')
    console.log("doctorrrr=",id);
    const viewpatient = async () => {
  try {
    let res;
    if (selectedDate) {
      
      res = await axios.get(
        `http://localhost:8000/api/doctor/doctor/patients-by-date/${id}`,
        { params: { date: selectedDate } }
      );
    } else {
   
      res = await axios.get(`http://localhost:8000/api/doctor/patients/${id}`);
    }

    setData(res.data);
    console.log("patient data =", res.data);
  } catch (error) {
    console.log(error);
  }
};

    useEffect(()=>{
        viewpatient()
    },[id, selectedDate])
    const approvepatient=async(id)=>{
        try{
            const patientid=id
            console.log("patient id=",patientid);
            const res=await axios.put(`http://localhost:8000/api/doctor/approvepatient/${patientid}`)
         
            viewpatient()
            
        }
        catch(error){
            console.log(error);
            
        }
    }
  return (
   <>
   <div>
    <h1 style={{fontFamily:'Audiowide'}}>Bookings</h1>
    <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', gap: '15px' }}>
  <h6 style={{ fontFamily: 'Caveat, cursive', fontSize: '18px', color: '#004d4d' }}>Select a date to filter</h6>
  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
    style={{
      padding: '10px 15px',
      borderRadius: '25px',
      border: '2px solid rgba(0,157,160,0.8)',
      backgroundColor: 'rgba(0,157,160,0.1)',
      color: '#004d4d',
      fontWeight: 'bold',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onFocus={(e) => e.target.style.backgroundColor = 'rgba(0,157,160,0.2)'}
    onBlur={(e) => e.target.style.backgroundColor = 'rgba(0,157,160,0.1)'}
  />
</div>

  
<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'25px'}}>
        {data.map((item)=>(

            <Card style={{ width: '18rem' ,fontFamily:'"Caveat",cursive'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Patient Name:{item.patientname}</Card.Title>
                <Card.Text>
                <h5>Phone Number:{item.phone}</h5>
                <h5>Date:{item.date.slice(0,10)}</h5>
                <h5>Tocken Number:{item.tockennumber}</h5>
                <h5>Status:{item.status}</h5>
                <button onClick={()=>approvepatient(item._id)}style={{backgroundColor:'rgba(0,157,160)',color:'white',padding:'10px',borderRadius:'15px',border:'none'}}>{item.status === 'approved' ? 'Approved' : 'Approve Booking'}</button>
                </Card.Text>
            </Card.Body>
        </Card>

        ))}
    </div>
   </div>
   </>
  )
}

export default Bookings