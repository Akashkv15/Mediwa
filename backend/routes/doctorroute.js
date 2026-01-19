import express from 'express'
import { approvedoctor, approvepatient, bookdr, cancelbooking, doctor, doctorapprove, doctordata, doctordetails, fetchdoctor, updatedoctordata, viewbookeddr, viewpatients, viewPatientsByDate } from '../controller/Doctorcontroller.js';
import {upload} from '../Middleware/multer.js'
const doctorroute =express.Router()
// doctorroute.post('/doctorregister',doctor)
doctorroute.post('/doctorregister',upload.single('image'),doctor)
doctorroute.get('/getprofile/:id',doctordetails)
doctorroute.put('/approvedoctor/:id',doctorapprove)
doctorroute.get('/getdoctor',fetchdoctor)
doctorroute.put('/approvedoctor/:id',approvedoctor)
doctorroute.get('/profile/:id',doctordata)
doctorroute.get('/viewdoctor',fetchdoctor)
doctorroute.post('/bookingdr/:id',bookdr)
doctorroute.get('/viewbookeddr/:id',viewbookeddr)
doctorroute.get('/patients/:id',viewpatients)
doctorroute.delete('/cancelbook/:id',cancelbooking)
doctorroute.put('/approvepatient/:id',approvepatient)
doctorroute.get('/editdr/:id',doctordata)
doctorroute.put('/updatedr/:id',updatedoctordata)
doctorroute.get('/doctor/patients-by-date/:id',viewPatientsByDate)
export default doctorroute;