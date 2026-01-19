import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Userprofile() {
  const id =localStorage.getItem("userid")
  console.log("zz=",id);
  const[image,setImage]=useState()
  const[data,setData]=useState()
  const nav=useNavigate()
  const viewuser =async()=>{

    try{
          const view=await axios.get(`http://localhost:8000/api/user/profile/${id}`)
          setData(view.data.profile)
          console.log("a=",view);
          const userid=view.data.profile._id
          localStorage.setItem("User",userid)
          
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(()=>{
    viewuser()
  },[id])

  const uploadphoto=async(e)=>{
    // e.preventDefault()
      const formData=new FormData()
      formData.append("photo",image)
      formData.append("userid",id)
      try{
          const res=await axios.post("http://localhost:8000/api/user/upload-photo",formData,
            {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
          )
          
          viewuser()
        }
      catch(error){
        console.log(error);
        
      }
  }
  const edit=()=>{
    nav('/userhome/editprofile')
  }
  return (
   <>
       <div className="profile-wrapper">
            <div className="profile-card">
                <h2 className="profile-title">Your Profile</h2>

                        {data?.photo && (
                    <img
                      src={`http://localhost:8000/uploads/${data.photo}`}
                      alt="profile"
                      width="150"
                      height="150"
                      style={{ borderRadius: "50%" ,marginLeft:'90px',marginBottom:'25px'}}
                    />
                  )}
                <div className="profile-item">
                    <span className="label">Name : {data?.name}</span>
                    <span className="value"></span>
                </div>

                <div className="profile-item">
                    <span className="label">Email:{data?.email}</span>
                    <span className="value"></span>
                </div>

                <div className="profile-item">
                    <span className="label">Phone:{data?.number}</span>
                    <span className="value"></span>
                </div>

                <div className="profile-item">
                    <span className="label">Address:{data?.address}</span>
                    <span className="value"></span>
                </div>

          <div className="profile-item" style={{fontFamily:'"Caveat",cursive'}}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
            <button onClick={uploadphoto} style={{marginLeft:"123px",border:'none',backgroundColor:'rgb(1,157,160)',color:'white',padding:"12px",borderRadius
              :'25px',fontFamily:'"Caveat",cursive'
            }}>Upload</button> <br />
            <button onClick={edit} style={{border:'none',borderRadius:'15px',backgroundColor:'rgba(0,157,160)',padding:'10px',color:'white',
              marginLeft:'95px',marginTop:'10px',fontFamily:'"Caveat",cursive'
            }}>Edit Your Profile</button>
            </div>
        </div>
   </>
  )
}

export default Userprofile