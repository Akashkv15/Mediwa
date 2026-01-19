import DoctorData from '../Models/doctordata.js';
import bcrypt from 'bcrypt';
import logindata from '../Models/logindata.js';
import DoctorAppointment from '../Models/Bookdr.js';

export const doctor = async (req, res) => {
  try {
    console.log(req.body); 
    console.log(req.file);

    const {
      name,
      registrationnumber,
      qualification,
      experiance,
      clinicname,
      clinicaddress,
      consultationname,
      consultationfee,
      token,
      password,
      timeto,
      timefrom,
      email,
      phone,
      days
    } = req.body;

    const imgpath = req.file?.path;

    const exist = await DoctorData.findOne({ email });
    if (exist) return res.status(400).json({ message: 'Email already registered' });

    const doctorpass = await bcrypt.hash(password, 10);

    const newdoctorlogin = new logindata({
      username: email,
      password: doctorpass,
      role: 'doctor'
    });
    await newdoctorlogin.save();

    const newdoctor = new DoctorData({
      name,
      registrationnumber,
      qualification,
      experiance,
      clinicname,
      clinicaddress,
      consultationname,
      consultationfee,
      token,
      phone,
      timefrom,
      timeto,
      days,
      email,
      password: doctorpass,
      profile: imgpath,
      commonKey:newdoctorlogin._id,
      status:req.body.status || "pending"
    });
    await newdoctor.save();

    return res.status(200).json({ message: 'New doctor registered successfully' ,  loginId: newdoctorlogin._id});

  } catch (e) {
    console.log("server error -->", e);
    return res.status(500).json({ message: 'Server error', error: e.message });
  }
};
export const doctordetails=async(req,res)=>{
  try{
      const doctor=await DoctorData.findOne({commonKey:req.params.id})
      if(!doctor)
      {
        return  res.status(401).json({message:'doctor doesnt exit'})
      }
      res.status(200).json({message:"successfull",doctor})
  }
  catch(error){
    console.log(error);
    
  }
} 
export const doctorapprove=async(req,res)=>{
  try{
      const updatedoctor=await DoctorData.findByIdAndUpdate(req.params.id,{status:'approved'},{new:true})
      if(!updatedoctor){

        return res.status(404).json({message:'doctor not approved'})
      }
      return res.status(200).json({message:"doctor approved sucessfully"})
  }
  catch(error){
       console.log(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}
export const fetchdoctor=async(req,res)=>{
  try{
      const dr=await DoctorData.find();
      res.status(200).json(dr)
  }
  catch(error){
    console.log(error);
     res.status(500).json({ message: "Server error", error: error.message });
  }
}
export const approvedoctor=async(req,res)=>{
  try{
      const {id}=req.params
      const approvedoctor=await DoctorData.findByIdAndUpdate(
        id,
        {status:'approve'},
        {new:true}
      )
  }
  catch(error){
    console.log(error);
    res.status(500).json({message:"Server error", error:error.message})
  }
}
export const doctordata=async(req,res)=>{
  const {id}=req.params
  const resp=await DoctorData.findOne({commonKey:id})
  console.log("aa==",resp);
  
  if(!resp){
    return res.status(404).json({message:"doctor is not available"})
  }
  return res.status(200).json({message:'doctor fetched sucessfully',resp})
}
export const bookdr=async(req,res)=>{
  try{
   const bookid = req.params.id; // read the param correctly
   console.log("Doctor ID to book:", bookid);
  const{id,patientname,date,phone}=req.body
  const doctor=await DoctorData.findById(bookid)
  if(!doctor){
    return res.status(404).json({message:'doctor is not available'})
  }
    if (doctor.token <= 0) {
      return res.status(400).json({ message: "No tokens available" });
    }
      

  doctor.token-=1
  const count=await DoctorAppointment.countDocuments({doctorid:bookid})
  const tockennumber=count+1
  await doctor.save()
  const book=new DoctorAppointment({
   patientname: patientname,
    phone:phone,
    date:date,
    userid:id,
    doctorid:bookid,
    tockennumber:tockennumber
  })
  await book.save()
    res.status(200).json({ message: "Doctor booked successfully",tockennumber: tockennumber });
  
   }
  catch(error){
    res.status(500).json({message:'servor error'})
  }
}
export const viewbookeddr =async(req,res)=>{
  const {id}=req.params
  try{
      const viewbookeddr=await DoctorAppointment.find({userid:id}).populate("doctorid");
      res.status(200).json(viewbookeddr)
  }
  catch(error){
    console.log(error);
    
  }
}
export const viewpatients =async(req,res)=>{
  const {id}=req.params
  try{
      const viewpatients=await DoctorAppointment.find({doctorid:id});
      res.status(200).json(viewpatients)
  }
  catch(error){
    console.log(error);
    
  }
}
export const  cancelbooking=async(req,res)=>{
  const {id}=req.params
  try{
      const cancelbooking=await DoctorAppointment.findByIdAndDelete(id)
      res.status(200).json(cancelbooking)
  }
  catch(error){
    console.log(error);
    
  }
}
export const approvepatient=async(req,res)=>{
  try{
    const updatepatient=await DoctorAppointment.findByIdAndUpdate(req.params.id,{status:'approved'},{new:true})
      if(!updatepatient){

        return res.status(404).json({message:'doctor not approved'})
      }
      return res.status(200).json({message:"doctor approved sucessfully"})
  }
  catch(error){
    console.log(error);
    
  }
}
export const updatedoctordata=async(req,res)=>{
  const {id}=req.params
  const{name,qualification,token}=req.body
  try{
        const updatedr=await DoctorData.findByIdAndUpdate(id,
          {
            name,qualification,token
          },
          {new:true}
        )
        if(!updatedr){
          return res.status(404).json({message:'updation failed'})
        }
        res.status(200).json({message:'sucess',updatedr})
  }
  catch(error){
    console.log(error);
    res.status(500).json({ message: "Update failed" });
  }
}
export const viewPatientsByDate = async (req, res) => {
  const { id } = req.params;     // doctor id
  const { date } = req.query;    // selected date from frontend

  try {
    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const patients = await DoctorAppointment.find({
      doctorid: id,
      date: { $gte: startDate, $lte: endDate }
    });

    res.status(200).json(patients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
