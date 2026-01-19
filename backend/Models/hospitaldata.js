import mongoose ,{Schema} from "mongoose";
const hospitalSchema= new Schema({
    name:{
        type:String,
        require :true
    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirm:{
        type:String,
        require:true
    },
    commonKey:{
        type:Schema.Types.ObjectId,
        ref:"loginData"
    }

})
const HospitalData=mongoose.model("HospitalData",hospitalSchema)
export default HospitalData