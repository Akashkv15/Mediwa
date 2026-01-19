import mongoose,{Schema} from 'mongoose'
const productSchema= new Schema({
    productname:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    profile:{
        type:String,
        // require:true
    },
    description:{
        type:String,
        require:true
    },shopid:{
          type:Schema.Types.ObjectId,
        ref:"HospitalData"
    }
})
const productData=mongoose.model("ProductData",productSchema);
export default productData;