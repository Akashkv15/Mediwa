import mongoose, {Schema}from "mongoose";
const userSchema= new Schema({
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
    },
    photo:{
        type:String,
        
    }

})
const userData=mongoose.model("UserData",userSchema)
export default userData;