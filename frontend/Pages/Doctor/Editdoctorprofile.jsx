import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Editdoctorprofile() {
  const [data, setData] = useState(null);
  const drid = localStorage.getItem('doctorid');
  const updateid=localStorage.getItem('doctorprofileid')
  console.log("aaaccc=",updateid);
  
  const fetchdr = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/doctor/editdr/${drid}`
      );
      setData(res.data.resp);
    } catch (error) {
      console.log(error);
    }
  };
  const updatedr=async()=>{
    try{
        const res=await axios.put(`http://localhost:8000/api/doctor/updatedr/${updateid}`,data)
        // e.preventDefault()
        alert("Profile Updated Sucessfully")
    }
    catch(error)
    {
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchdr();
  }, [drid]);

  return (
    <>
      {data && (
        <div style={{
          maxWidth: '400px',
          margin: '50px auto',
          padding: '20px',
          borderRadius: '12px',
          backgroundColor: '#f9f9f9'
        }}>
          <h3 style={{
            textAlign: 'center',
            marginBottom: '25px',
            fontFamily: 'Audiowide'
          }}>
            Edit Doctor Profile
          </h3>

          <InputGroup className="mb-4">
            <Form.Control
              value={data.name || ""}
              placeholder="Doctor Name"
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              value={data.qualification || ""}
              placeholder="Qualification"
              onChange={(e) =>
                setData({ ...data, qualification: e.target.value })
              }
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              value={data.token || ""}
              placeholder="Token Number"
              onChange={(e) =>
                setData({ ...data, token: e.target.value })
              }
            />
          </InputGroup>
          <button
  onClick={updatedr}
  style={{
    width: '100%',
    height: '45px',
    borderRadius: '8px',
    backgroundColor: 'rgba(0,157,160)',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    marginTop: '10px',
    border:"none",
    fontFamily:'"Caveat",cursive'
  }}
>
  Update Profile
</button>
        </div>
      )}
    </>
  );
}

export default Editdoctorprofile;
