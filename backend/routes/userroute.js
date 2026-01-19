import express from 'express'
import {updateuserprofile, uploaduserprofile, userdata, userregister, view, viewdata, viewuserdata} from '../controller/usercontroller.js'
import { upload } from '../Middleware/multer.js'
const userroute=express.Router()
userroute.post('/userregister',userregister)
userroute.get('/getprofile/:id',userdata)
userroute.get('/profile/:id',viewdata)
userroute.post('/upload-photo',upload.single('photo'),uploaduserprofile)
userroute.get('/editprofile/:id',viewuserdata)
// userroute.put('/updateprofile/:id',updateuserprofile)
userroute.get('/userdata/:id',view)
userroute.put(
  "/updateuserprofile",
  upload.single("photo"),
 updateuserprofile
)

export default userroute;