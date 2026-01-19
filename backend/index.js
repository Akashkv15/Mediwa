import express from 'express'
import cors from 'cors'
import mongoose  from 'mongoose';
// import HospitalData from './Models/hospitaldata.js'
import loginroute from './routes/loginroute.js';
import shoproute from './routes/shopregisterroute.js';
import userroute from './routes/userroute.js';
import doctorroute from './routes/doctorroute.js';
import productroute from './routes/addproductroute.js';
import orderroute from './routes/orderroute.js';

const app=express();

app.use(cors({origin:'*'}));
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Doctor")
.then(()=>{
    console.log("mongoose connected sucessfully");
    
})
.catch((error)=>{
    console.log("Mongoose connection error",error);
    
})
app.listen(8000,()=>{
        console.log("server running sucessfully");
        
})


// app.post('/addmember',async(req,res)=>{
//     const{name,email,address,number,password}=req.body
//     try{
//         const exist=await HospitalData.findOne({email})
//         if(exist)
//         {
//             return res.status(401).json({message:'same user exist'})
//         }
//         else{
//             const newmember= new HospitalData({
//                 name,email,number,password,address
//             });
//             await newmember.save()
//             return res.status(200).json({message:'registered sucssesfully'})
//         }
//     }
//     catch{

//     }
// })
app.use('/api/login',loginroute)
app.use('/api/shop',shoproute)
app.use('/api/user',userroute)
app.use('/api/doctor',doctorroute)
app.use('/uploads',express.static("uploads"))
app.use('/api/product',productroute)
app.use('/api/order',orderroute)