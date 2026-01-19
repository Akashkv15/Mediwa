import mongoose,{Schema} from "mongoose";
const orderSchema=new Schema({
    orderquantity:{
        type:Number,
        require:true
    },
    orderaddress:{
        type:String,
        require:true
    },
    totalprice:{
        type:Number,
        require:true
    },
      userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserData",
    required: true
  },
      productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductData",
      required: true
    },
     shopid: {                      
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopData",
    required: true
  },
  status: {
  type: String,
  enum:["pending","approved","cancelled"],
  default: "pending",
},
// orderstatus:{
//   type:Boolean,
//   default:false
// }

    
})
const orderData=mongoose.model("orderData",orderSchema)
export default orderData;