import express from 'express'
import { profiledata,  shopdata,  shopdetails, shopregister } from '../controller/shopregister.js'
const  shoproute=express.Router()
shoproute.post('/shopregister',shopregister)
shoproute.get('/getprofile/:id',shopdetails)
shoproute.get('/profile/:id',profiledata)
shoproute.get('/dash/:shopid',shopdata)

export default shoproute;