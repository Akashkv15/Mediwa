import express from 'express'
import { loginuser } from '../controller/logincontoller.js'
const loginroute=express.Router()
loginroute.post('/',loginuser)
export default loginroute