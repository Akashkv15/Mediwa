import { response } from "express";
import productData from "../Models/addproduct.js";

export const product =async(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    
    try{
        const{
            productname,
            price,
            category,
           
            quantity,
             description,
            
        }=req.body
        
        const imgpath = req.file?.path;
        const exist= await productData.findOne({productname})
        if(exist){
            return res.status(404).json({message:"same product exist"})
        }
        const newproduct= new productData({
            productname,price,category,quantity,description,profile:imgpath,shopid:req.params.id
        })
        await newproduct.save();
        return res.status(200).json({message:"new product added "})
    }
    catch(error){
        console.log(error);
        
    }
}
export const productdata=async(req,res)=>{
    // console.log("hi");
    
try{

        const products=await productData.find({shopid:req.params.id})
        if(products)
        {
            return res.status(200).json({message:"product exist",products})
        }
        else{
            return res.status(401).json({message:"there is no such product"})
        }
}
catch(error){
    console.log(error);
    res.status(500).json({message:"error"})
}
} 
export const getsingleproduct=async(req,res)=>{
    try{
            const product=await productData.findById(req.params.id)
            if(!product){
                return res.status(404).json({
                    message:"Product not found"
                })
            }
            return res.status(200).json({
                message:"Product exist",
                products:product
            })
    }
    catch(error){
            res.status(500).json({message:error.message})
    }
}
export const updateproduct=async(req,res)=>{
    try{
        const {id} =req.params
        const{
            productname,price,category,quantity,description
        }=req.body
        const update= await productData.findByIdAndUpdate(id,{
            productname,price,category,quantity,description},
            {new:true}
        )
        if(!update){
            return res.status(404).json({message:"product doesnot exist"})
        }
        return res.status(200).json({message:"updated"})
        product:update

    }
    catch(error){
         res.status(500).json({ message: error.message })
    }
}
export const deleteproduct=async(req,res)=>{
    try{    
        const{id}=req.params
        const deleteproduct=await productData.findByIdAndDelete(id)
        if(!deleteproduct){
            return res.status(404).json({message:"cannot delete"})
        }
        return res.status(200).json({message:"deleted"}
            
        )
    }
    catch(error){
        console.log(error);
        
    }
}
export const getallproducts=async(req,res)=>{
    try{
        const userproducts= await productData.find()
        res.status(200).json({userproducts})
    }
    catch(error){
            console.log(error);
             res.status(500).json({ message: error.message })
            
    }
}
export const orderproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productData.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if(product.quantity<=0){
         return res.status(404).json({ message: "Product not found" });
    }
    product.quantity-=1;
    await product.save()
    res.status(200).json({message:"order placed sucessfully",product})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};