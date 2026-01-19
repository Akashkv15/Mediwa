import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Doctorregister() {
  const [registrationNumber, setRegistrationNumber] = useState(generateRegistrationNumber());

  // Function to generate registration number
  function generateRegistrationNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `DR-${year}${month}${day}-${random}`;
  }

  // Function to regenerate number
  const regenerateNumber = () => {
    setRegistrationNumber(generateRegistrationNumber());
  };

  const[name,setName]=useState("")
  console.log(name);
  
  const[qualification,setQualification]=useState("")
  console.log(qualification);
  
  const[experiance,setExperiance]=useState("")
  console.log(experiance);
  
  const[clinicname,setClinicname]=useState("")
  console.log(clinicname);
  
  const[consultation,setConsultation]=useState("")
  console.log(consultation);
  
  const[consultationfee,setconsultationfee]=useState("")
  console.log(consultationfee);
  
  const[clinicaddress,setClinicaddress]=useState("")
  console.log(clinicaddress);
  
  const[timeto,setTimeto]=useState("")
  console.log(timeto);
  
  const[timefrom,setTimefrom]=useState("")
  console.log(timefrom);
  
  const[email,setEmail]=useState("")
  console.log(email);
  
  const[phone,setPhone]=useState("")
  console.log(phone);
  
  const[password,setPassword]=useState("")
  console.log(password);
  
  const[token,setToken]=useState("")
  console.log(token);
  
  const[profile,setProfile]=useState("")
  console.log(profile);

  const[days,setDays]=useState("")
  console.log(days);
  
  
  const navigate=useNavigate()

  const adddoctor=async(event)=>{
    event.preventDefault();
    // const body={name,qualification,experiance,clinicname,clinicaddress,consultation,consultationfee
    //   ,timefrom,timeto,email,password,phone,token,profile
    // }
   try{
        const data=new FormData()
        data.append('name',name)
        data.append('email',email)
        data.append('clinicaddress',clinicaddress)
        data.append('qualification',qualification)
        data.append('experiance',experiance)
        data.append('clinicname',clinicname)
        data.append('consultationname',consultation)
        data.append('consultationfee',consultationfee)
        data.append('timeto',timeto)
        data.append('timefrom',timefrom)
        data.append('phone',phone)
        // data.append('image',profile)
        data.append('token',token)
        data.append('days',days)
        data.append('password',password)
        data.append('image',profile)
        data.append('status',"pending")
        
        // data.append('phone',phone)
        data.append('registrationnumber',registrationNumber)
        console.log(data);
        const responce= await axios.post("http://localhost:8000/api/doctor/doctorregister",data,
        {
          headers:{
            "content-type":"multipart/form-data",
          },
        })
        alert(responce.data.message)
        navigate('/Loginpage')
   }
   catch(error){
    console.log(error,'hi error');
    
   }
  }

  return (
    <>
      <div className='maindiv1'>
        <div className='maindiv2'>
          <h3 id='h55'>Welcome to Mediwa</h3>
          <h5 id='h5'>Doctor Registration</h5>
          
          <Form>
            <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formDoctorName">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Enter Doctor Name
                </Form.Label>
                <Form.Control type="text" placeholder="Doctor Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              </Form.Group>
              
              <Form.Group className="" controlId="formRegistrationNumber">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Form.Label style={{ textAlign: 'left', display: 'block', margin: 0 }}>
                    Registration Number
                  </Form.Label>
                  <Button 
                    variant="link"
                    onClick={regenerateNumber}
                    style={{ 
                      padding: '0',
                      fontSize: '12px',
                      textDecoration: 'none'
                    }}
                  >
                    🔄 Regenerate
                  </Button>
                </div>
                <Form.Control 
                  type="text" 
                  value={registrationNumber}
                  placeholder="Register Number"
                  readOnly
                  onChange={(e)=>setRegistrationNumber(e.target.value)}
                />
              </Form.Group>
            </div>
            
            <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Qualification
                </Form.Label>
                <Form.Control type="text" placeholder="Enter qualifications" value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
              </Form.Group>
              
              <Form.Group className="" controlId="formExperience">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Experience
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your experience" value={experiance} onChange={(e)=>setExperiance(e.target.value)}/>
              </Form.Group>
            </div>
              <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Clinic Name
                </Form.Label>
                <Form.Control type="text" placeholder="Enter clinic name" value={clinicname} onChange={(e)=>setClinicname(e.target.value)}/>
              </Form.Group>
              
              <Form.Group className="" controlId="formExperience">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Consultation fees
                </Form.Label>
                <Form.Control type="number" placeholder="Enter your fee" value={consultationfee} onChange={(e)=>setconsultationfee(e.target.value)} />
              </Form.Group>
            </div>
             <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Clinic Address
                </Form.Label>
                <Form.Control as="textarea" style={{width:'570px',height:'100px'}}  placeholder="Enter clinic name" value={clinicaddress} onChange={(e)=>setClinicaddress(e.target.value)} />
              </Form.Group>
            </div>
              <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                    Available Days
                </Form.Label>
                <Form.Control type="text" placeholder="eg:Monday to Friday"value={days} onChange={(e)=>setDays(e.target.value)} />
              </Form.Group>
              
              <Form.Group className="" controlId="formExperience">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Time From
                </Form.Label>
                <Form.Control style={{width:'100px'}} type="number" placeholder=":-" value={timefrom} onChange={(e)=>setTimefrom(e.target.value)} />
              </Form.Group>
               <Form.Group className="" controlId="formExperience">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Time to
                </Form.Label>
                <Form.Control type="number"style={{width:'100px'}}placeholder=":-" value={timeto} onChange={(e)=>setTimeto(e.target.value)}/>
              </Form.Group>
            </div>
            <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                 Email Adress
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
              
              <Form.Group className="" controlId="formExperience">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Phone Number
                </Form.Label>
                <Form.Control type="number" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}  />
              </Form.Group>
            </div>
            <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                 Password
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </Form.Group>
              
              <Form.Group className="" controlId="formExperience">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                  Tokens
                </Form.Label>
                <Form.Control type="number" placeholder="Enter Maximum patient tokens" className='placeholder-big' value={token} onChange={(e)=>setToken(e.target.value)}/>
              </Form.Group>
            </div>
             <div style={{ display: 'flex', gap: '50px', marginTop: '25px' }}>
              <Form.Group className="" controlId="formQualification">
                <Form.Label style={{ textAlign: 'left', display: 'block' }}>
                 Profile picture
                </Form.Label>
                <Form.Control type="file" placeholder="Enter Your Email"  onChange={(e)=>setProfile(e.target.files[0])} />
              </Form.Group>
            </div>
            <button style={{marginTop:'20px',backgroundColor:'rgba(1, 167, 150)',border:'none',padding:'15px',borderRadius:'25px',fontFamily: '"Audiowide", sans-serif'}} onClick={adddoctor}>Register Doctor</button>
            <h5 style={{color:"rgba(1,167,150)",fontSize:'15px',marginTop:'10px',fontFamily: '"Audiowide", sans-serif'}}>Already have an account?Login here</h5>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Doctorregister;