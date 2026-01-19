import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbarsection from '../../Combonents/Navbarsection'

function Userhome() {
  const navigate =useNavigate()
  const profile =()=>{
    navigate("profile")
  }
  const dashboard=()=>{
    navigate('dashboard')
  }
  const purchase=()=>{
    navigate('')
  }
  const orderlist=()=>{
    navigate('userorder/:id')
  }
  const doctorlist=()=>{
    navigate('viewdoctor')
  }
  const appointments=()=>{
    navigate('userappointments')
  }
  return (
   <>
     <Navbarsection></Navbarsection>
     <div className='div1'>
          <div className='div2'>
  {/* <button className="side-btn" onClick={dashboard}>
    <i className="bi bi-graph-up-arrow"></i> Dashboard
  </button> */}
  
  {/* <button className="side-btn" onClick={profile}>
    <i className="bi bi-person-fill"></i>Profile
  </button> */}

  <button className="side-btn" onClick={purchase}>
    <i className="bi bi-bag-fill"></i> Products
  </button>

  <button className="side-btn" onClick={orderlist}>
    <i className="bi bi-bag-plus-fill"></i>Orders
  </button>

  <button className="side-btn" onClick={doctorlist}>
    <i className="bi bi-clipboard2-plus"></i> Doctors
  </button>

  <button className="side-btn" onClick={appointments}>
    <i className="bi bi-boxes"></i>Appointments
  </button>
</div>
<Outlet/>
</div>
   </>
  )
}

export default Userhome