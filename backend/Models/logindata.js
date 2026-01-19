import mongoose, {Schema} from "mongoose";


const LoginScheme=new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    }
})
const logindata=mongoose.model("LoginData",LoginScheme)
export default logindata;