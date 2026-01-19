import bcrypt from 'bcrypt'
import logindata from '../Models/logindata.js'
import DoctorData from '../Models/doctordata.js';
export const loginuser= async(req,res)=>{
    const{username,password}=req.body
    console.log(username);
    
    try{
        const usr=await logindata.findOne({username})
        console.log(usr);
        
        if(!usr){
            return res.status(400).json({message:'user is not found'})
        }
        const ismatch = await bcrypt.compare(password,usr.password)
        if(!ismatch){
            res.status(400).json({message:'password is not matching'})
        }
        if(usr.role==="doctor"){
            const doctor=await DoctorData.findOne({commonKey:usr._id})
            if(!doctor){
                return res.status(404).json({message:"Doctor profile is not found"})
            }
            if(doctor.status==="pending"){
                return res.status(403).json({message:"Your account is not approved by the admin"})
            }
        }
        return res.status(200).json({message:"Login sucessfully",usr})

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'servor error'})
        
    }
}
