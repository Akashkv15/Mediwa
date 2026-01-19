import logindata from '../Models/logindata.js';
import userData from '../Models/Userdata.js';
import  UserData from '../Models/Userdata.js';
import bcrypt from 'bcrypt';
export const userregister=async(req,res)=>{
    console.log("a=",req.body);
    const{name,email,number,password,address,confirm}=req.body
    console.log("a=",req.body);
    try{
        const exist=await logindata.findOne({username:email})
        if(exist){
            return res.status(400).json({message:"same user already exist"})
        }
        const userpass=await bcrypt.hash(password,10)
        const newuserlogin=new logindata({
            username:email,
            password:userpass,
            role:'user'
        })
        await newuserlogin.save()
        const newuser= new UserData({
            name,password,address,number,email,confirm,commonKey:newuserlogin._id
        });
        await newuser.save()
        return res.status(200).json({message:"new user registered successfully"})
    }
    catch(error){
       res.status(500).json({message:"server error"})

    }
}
export const userdata=async(req,res)=>{
    try{
        const user=await UserData.findOne({commonKey:req.params.id})
        if(!user)
        {
            return res.status(401).json({message
                :"user doesnt exist"
            })
        }
        res.status(200).json({message:"successfull",user})
    }
    catch(error){
        console.log(error);
        
    }
}
export const viewdata=async(req,res)=>{
    try{
        const{id}=req.params
        const profile=await userData.findOne({commonKey:id})
        console.log("a=",profile);
        
        if(!profile){
            return res.status(401).json({message:"user doesnot exist"})
        }
        return res.status(200).json({message:"user found",profile})
    }
    catch(error)
    {
        console.log(error);
        

    }
}
export const uploaduserprofile=async(req,res)=>{
    try{
        const{userid}=req.body
        const user=await userData.findOneAndUpdate(
            {commonKey:userid},
            {photo:req.file.filename},
            {new:true}
        )
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        return res.status(200).json({message
            :"profile photo uploaded sucessfully"
        })
    }
    catch(error){
        console.log(error);
        
    }
}
export const viewuserdata=async(req,res)=>{
    try{
        const user=await userData.findById(req.params.id)
        if(!user){
            return res.status(400).json({message:"the user is not found"})
        }
        return res.status(200).json({message:"user exist",userdetails:user}
            
        )
    }
    catch(error){
        console.log(error);
        
    }
}

export const view=async(req,res)=>{
    try{
        const{id}=req.params
        const profile=await userData.findOne({commonKey:id})
        console.log("a=",profile);
        
        if(!profile){
            return res.status(401).json({message:"user doesnot exist"})
        }
        return res.status(200).json({message:"user found",profile})
    
    }
    catch(error){
        console.log(error);
        
    }
}
export const updateuserprofile = async (req, res) => {
  try {
    const { userid, name, email, number, address } = req.body

    const updateData = { name, email, number, address }

    if (req.file) {
      updateData.photo = req.file.filename
    }

    const updatedUser = await userData.findOneAndUpdate(
      { commonKey: userid },
      updateData,
      { new: true }
    )

    if (!updatedUser) {
      return res.status(404).json({ message: "user not found" })
    }

    res.status(200).json({
      message: "profile updated",
      updatedUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "server error" })
  }
}
