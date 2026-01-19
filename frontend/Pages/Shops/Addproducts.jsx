import React from 'react'
import Navbarsection from '../../Combonents/Navbarsection'

function Addproducts() {
  return (
   <>
   <Navbarsection></Navbarsection>
   <div className='div1'>
          <div className='div2' style={{height:'700px'}}>
  <button className="side-btn">
    <i className="bi bi-graph-up-arrow"></i> Dashboard
  </button>

  <button className="side-btn">
    <i className="bi bi-person-fill"></i> Profile
  </button>

  <button className="side-btn">
    <i className="bi bi-bag-plus-fill"></i> Add Product
  </button>

  <button className="side-btn">
    <i className="bi bi-clipboard2-plus"></i> Orders
  </button>

  <button className="side-btn">
    <i className="bi bi-boxes"></i> Products
  </button>
</div>

</div>
   </>
  )
}

export default Addproducts