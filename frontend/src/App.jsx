import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Register from '../Pages/Register'
import Loginpage from '../Pages/Loginpage'
import Shopdashboard from '../Pages/Shops/Shopdashboard'
import Navbarsection from '../Combonents/Navbarsection'
import Addproducts from '../Pages/Shops/Addproducts'
import ShopRegister from '../Pages/Shops/ShopRegister'
import Frontpage from '../Combonents/Frontpage'
import Userregister from '../Pages/user/Userregister'
import Userdashboard from '../Pages/user/Userdashboard'
import Doctorregister from '../Pages/Doctor/Doctorregister'
import Addproduct from '../Pages/Shops/Addproduct'
import Doctordashboard from '../Pages/Doctor/Doctordashboard'
import Products from '../Pages/Shops/Products'
import Homeshop from '../Pages/Shops/Homeshop'
import Editproduct from '../Pages/Shops/Editproduct'
import Profile from '../Pages/Shops/Profile'
import Userhome from '../Pages/user/Userhome'
import Userprofile from '../Pages/user/Userprofile'
import Userpurchase from '../Pages/user/Userpurchase'
import Editprofile from '../Pages/user/Editprofile'
import Userorders from '../Pages/user/Userorders'
import Shoporders from '../Pages/Shops/Shoporders'
import Adminpage from '../Pages/Adminpage'
import Doctorhome from '../Pages/Doctor/Doctorhome'
import Doctorprofile from '../Pages/Doctor/Doctorprofile'
import Userdoctor from '../Pages/user/Userdoctor'
import Userappointments from '../Pages/user/Userappointments'
import Bookings from '../Pages/Doctor/Bookings'
import Editdoctorprofile from '../Pages/Doctor/Editdoctorprofile'


function App() {


  return (
    <>
      <Routes>
        {/* <Route path='/Register' element={<Register></Register>}/> */}
        <Route path='/' element={<Frontpage></Frontpage>}/>
        <Route path='/Shophome' element={<Homeshop></Homeshop>}>
        <Route path='' element={<Shopdashboard></Shopdashboard>}/>
            <Route path='Products' element={<Products></Products>}/>
            <Route path='Editproduct/:id' element={<Editproduct></Editproduct>}/>
            <Route path='Addproduct' element={<Addproduct></Addproduct>}/>
            <Route path='Profile'element={<Profile></Profile>}/>
            <Route path='shoporders' element={<Shoporders></Shoporders>}/>
        </Route>
        <Route path='/userhome' element={<Userhome></Userhome>}>
                 <Route path='' element={<Userpurchase></Userpurchase>}/>
                 <Route path='dashboard' element={<Userdashboard></Userdashboard>}/>  
                 <Route path='editprofile' element={<Editprofile></Editprofile>}/>
                 <Route path='viewdoctor' element={<Userdoctor></Userdoctor>}/>
                 <Route path='userorder/:id' element={<Userorders></Userorders>}/>
                 <Route path='userappointments'element={<Userappointments></Userappointments>}/>
                 <Route path='profile' element={<Userprofile></Userprofile>}/>
        </Route>
        <Route path='/doctorhome' element={<Doctorhome></Doctorhome>}>
            <Route path='' element={<Doctordashboard></Doctordashboard>}/>
            <Route path='profile' element={<Doctorprofile></Doctorprofile>}/>
            <Route path='bookings' element={<Bookings></Bookings>}/>
            <Route path='editprofile' element={<Editdoctorprofile></Editdoctorprofile>}/>
        </Route>
        <Route path='/Loginpage' element={<Loginpage></Loginpage>}/>
        <Route path='/Navbar' element={<Navbarsection></Navbarsection>}/>
        <Route path='/Addproducts' element={<Addproducts></Addproducts>}/>
        <Route path='/Shopregister' element={<ShopRegister></ShopRegister>}/>
        <Route path='/Userregister' element={<Userregister></Userregister>}/>
        <Route path='/Doctorregister' element={<Doctorregister></Doctorregister>}/>
        <Route path='/adminpage' element={<Adminpage></Adminpage>}/>
      </Routes> 
    </>
  )
}

export default App;
