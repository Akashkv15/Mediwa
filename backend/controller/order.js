import { trusted } from "mongoose";
import productData from "../Models/addproduct.js";
import orderData from "../Models/orders.js";
export const order=async(req,res)=>{
  const userid =req.params.id
    const{productid,quantity,address}=req.body
    try{
        const productstock=await productData.findById(productid)
        if(!productstock){
            return res.status(404).json({message:"product is not found"})
        }
        if(productstock.quantity<quantity){
            return res.status(400).json({message:"product is out of stock"})
        }
        const totalprice=quantity*productstock.price
            const orderitem=new orderData({
              productid:productid,
               orderquantity:quantity,
                orderaddress:address,
                userid,
                shopid: productstock.shopid,
                totalprice
               
            })
            await orderitem.save()
            // res.status(200).json({
            //     message:"order placed successfully",
            //     order:orderitem
            // })
            productstock.quantity-=quantity;
           
            await productstock.save()
             res.status(200).json({
      message: "Order placed successfully",
      order: orderitem,
      updatedStock: productstock.quantity,
    
    }); 
    }
    catch(error){
        console.log(error);
    res.status(500).json({ success: false, message: "Order failed" });
    }
}
export const getOrderById = async (req, res) => {
  const userid = req.params.id;

  try {
    const order = await orderData.find({userid}).populate("productid");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
}
export const getOrderByIdshop = async (req, res) => {
  const {shopid} = req.params

  try {
    const order = await orderData.find({shopid}).populate("productid").populate("userid");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
}
export const approveorder=async(req,res)=>{
  const{id}=req.params
  try{
      const updateorder=await orderData.findByIdAndUpdate(
        id,
        {status:"approved"},
        {new:true}
      )
      res.status(200).json({message:"order approved",updateorder})
  }

  catch(error){
    console.log(error);
    
  }
}
export const cancelorder=async(req,res)=>{
  const{id}=req.params
  try{
      const updatecancel= await orderData.findByIdAndUpdate(
        id,
        {status:"cancelled"},
        {new:true}
      )
      res.status(200).json({message:'order cancelled'},updatecancel)
  }
  catch(error){
    console.log(error);
   
  }
}