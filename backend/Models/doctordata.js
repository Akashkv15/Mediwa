import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema({
    name: { type: String, require: true },
    registrationnumber: { type: String, require: true },
    qualification: { type: String, require: true },
    experiance: { type: String, require: true },
    clinicname: { type: String, require: true },
    consultationname: { type: String, require: true },
    consultationfee: { type:Number, require: true },
    clinicaddress: { type: String, require: true },
    timeto: { type: Number, require: true },     
    timefrom: { type: Number, require: true },    
    email: { type: String, required: true },
    phone: { type: Number, require: true },       
    password: { type: String, require: true },
    token: { type: Number, require: true },
    profile: { type: String, require: true },
    days:{type:String,require:true},   
       commonKey:{
        type:Schema.Types.ObjectId,
        ref:"loginData"
    } ,
    status:{
        type:String,
        default:"pending"
    }  
});
 
const DoctorData = mongoose.model("DoctorData", doctorSchema);
export default DoctorData;
