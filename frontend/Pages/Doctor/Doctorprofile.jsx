import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Doctorprofile() {
    const id=localStorage.getItem("doctorid")
    const nav=useNavigate()
    //  const edit=()=>{
    //   nav('/editprofile')
    // }
    console.log("doctor=",id);
    const [doct,setDoct]=useState({})
    const doctordata=async()=>{
        try{
                const res=await axios.get(`http://localhost:8000/api/doctor/profile/${id}`)
                localStorage.setItem('doctorprofileid',res.data.resp._id)
                setDoct(res.data.resp)
            console.log(res.data.resp);
        }       
        catch(error){
            console.log(error);    
        }
    }
    useEffect(()=>{
        doctordata()
    },[])
  return (
    <div>
             <div className="profile-wrapper">
            <div className="profile-card">
                <h2 className="profile-title">Your Profile</h2>

                        {doct?.profile && (
                    <img
                      src={`http://localhost:8000/${doct?.profile}`}
                      alt="profile"
                      width="150"
                      height="150"
                      style={{ borderRadius: "50%" ,marginLeft:'90px',marginBottom:'25px'}}
                    />
                  )}
                <div className="profile-item">
                    <span className="label">Name:{doct.name } </span>
                    <span className="value"></span>
                </div>

                <div className="profile-item">
                    <span className="label">Qualification:{doct.qualification}</span>
                    <span className="value"></span>
                </div>

                <div className="profile-item">
                    <span className="label">Clinicname:{doct.clinicname}</span>
                    <span className="value"></span>
                </div>

                <div className="profile-item">
                    <span className="label">Fee:{doct.consultationfee}</span>
                    <span className="value"></span>
                </div>
                <div className="profile-item">
                    <span className="label">Available Tocken:{doct.token}</span>
                    <span className="value"></span>
                </div>
                {/* <div className="profile-item">
                    <button onClick={edit()} style={{backgroundColor:'rgba(0,157,160)',color:'white',border:'none',padding:'8px',borderRadius:'15px',fontFamily:'"Caveat",cursive'}}
                    >Edit Your Profile</button>
                </div> */}

          {/* <div className="profile-item" style={{fontFamily:'"Caveat",cursive'}}>
            <input
              type="file"
              accept="image/*"
             
            /> */}
          {/* </div> */}
            {/* <button  style={{marginLeft:"123px",border:'none',backgroundColor:'rgb(1,157,160)',color:'white',padding:"12px",borderRadius
              :'25px',fontFamily:'"Caveat",cursive'
            }}>Upload</button> */}
            </div>
        </div>

    </div>
  )
}

export default Doctorprofile