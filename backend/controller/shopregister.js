import HospitalData from "../Models/hospitaldata.js"
import logindata from "../Models/logindata.js"
import bcrypt from 'bcrypt'
import orderData from "../Models/orders.js"
import productData from "../Models/addproduct.js"
export const shopregister=async(req,res)=>{
    console.log(req.body)
    const{name,email,address,number,password}=req.body
    console.log(req.body);
    
    try{
        const exist=await logindata.findOne({username:email})
        if(exist)
        {
            return res.status(401).json({message:'same user exist'})
        }
        const mypass= await bcrypt.hash(password,10)
        const newlogin=new logindata({
            username:email,
            password:mypass,
            role:'shop'
        })

        await newlogin.save();
        
        const newmember= new HospitalData({
                name,email,number,password,address,commonKey:newlogin._id
        });
            await newmember.save()
            return res.status(200).json({message:'registered sucssesfully'})
        
    }
    catch(error){
        console.log("REGISTER ERROR:", error);
       res.status(500).json({message:"server error"})
        
    }
}
export const shopdetails=async (req,res)=>{
    try{

        
        const shop=await HospitalData.findOne({commonKey:req.params.id})
        if(!shop) {
            return res.status(401).json({message:"shop not found"})
        }
         res.status(200).json({message:"successfull",shop})
    }
    catch(error){
        console.log(error);
        
    }
    
}
export const profiledata=async(req,res)=>{
    try{
        const {id}=req.params
        const profile=await HospitalData.findById(id)
        if(!profile){
            return res.status(404).json({message:"data not exist"})
        }
        return res.status(200).json({message:"data found",data:profile})
    }
    catch(error){
            console.log(error);
            return res.status(500).json({message:"servor error"})
            
    }
}
export const shopdata= async(req,res)=>{
    try{
            const{shopid}=req.params
            const totalorders=await orderData.find({shopid})
            const produc=totalorders.length
            const totalrevenue=totalorders.reduce((sum,order)=>sum+order.totalprice,0)
            const totalproducts=await   productData.find({shopid})   
            const prod=totalproducts.length   
            const pendingCount = await orderData.countDocuments({shopid,status: "pending"});
            res.status(200).json({message:"successfull",produc,totalrevenue,prod,pendingCount})
                    
    }
    catch(error){
         console.log(error);
            return res.status(500).json({message:"servor error"})
            
    }
}