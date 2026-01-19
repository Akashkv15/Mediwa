import React from 'react'
import Navbarsection from '../../Combonents/Navbarsection'
import { Outlet, useNavigate } from 'react-router-dom'

function Doctorhome() {
    const  nav=useNavigate()
    const profile=()=>{
            nav('profile')
    }
    const booking=()=>{
      nav('bookings')
    }
    const edit=()=>{
      nav('editprofile')
    }
  return (
    <>
    <div>
        <Navbarsection></Navbarsection>
            <div className='div1'>
          <div className='div2'>
  <button className="side-btn">
    <i className="bi bi-graph-up-arrow"></i> Dashboard
  </button>

  <button className="side-btn" onClick={profile}>
    <i className="bi bi-person-fill"></i> Profile
  </button>

  {/* <button className="side-btn" >
    <i className="bi bi-bag-plus-fill"></i> Add Product
  </button> */}

  <button className="side-btn" onClick={booking}>
    <i className="bi bi-clipboard2-plus"></i>Bookings
  </button>

  <button className="side-btn" style={{fontSize:'15px'}} onClick={edit}>
    <i className="bi bi-boxes"></i> Edit Your Profile
  </button>
</div>
    <Outlet/>
</div>

    </div>
    </>
  )
}

export default Doctorhome