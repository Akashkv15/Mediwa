import React from 'react'
import Navbarsection from '../../Combonents/Navbarsection'
import { Outlet, useNavigate } from 'react-router-dom'

function Homeshop() {
    const navigate=useNavigate()
     const addproduct=()=>{
      navigate('Addproduct')
  }
   const viewproduct=(()=>{
      navigate('Products')
   })
   const viewdashboard=(()=>{
        navigate('')
   })
   const profile=(()=>{
    navigate('Profile')
   })
   const shoporder=(()=>{
    navigate('shoporders')
   })
  return (
   <>
   <Navbarsection></Navbarsection>
    <div className='div1' style={{}}>
          <div className='div2'>
  <button className="side-btn" onClick={viewdashboard}>
    <i className="bi bi-graph-up-arrow"></i> Dashboard
  </button>

  <button className="side-btn" onClick={profile}>
    <i className="bi bi-person-fill"></i> Profile
  </button>

  <button className="side-btn" onClick={addproduct}>
    <i className="bi bi-bag-plus-fill"></i> AddProduct
  </button>

  <button className="side-btn" onClick={shoporder}>
    <i className="bi bi-clipboard2-plus"></i> Orders
  </button>

  <button className="side-btn" onClick={viewproduct}>
    <i className="bi bi-boxes"></i> Products
  </button>
</div>
  <Outlet/>
</div>

   </>
  )
}

export default Homeshop