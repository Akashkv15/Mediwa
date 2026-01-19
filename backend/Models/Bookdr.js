import mongoose,{Schema} from "mongoose";
const drSchema=new Schema({
     patientname:{type:String,
        require:true
     },
     fee:{
        type:Number,
        require:true
     },
      tockennumber:{
         type:Number,
         
            default:0
      },
     phone:{
        type:Number,
        require:true
     },
     date:{
        type:Date,
        require:true
     },
        userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    
    doctorid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoctorData",
      required: true
    },
      status:{
        type:String,
        default:"pending"
    }  
})
const DoctorAppointment=new mongoose.model("DoctorAppoinment",drSchema)
export default DoctorAppointment;