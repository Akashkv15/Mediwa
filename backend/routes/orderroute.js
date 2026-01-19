import express from 'express'
import { approveorder, cancelorder, getOrderById,getOrderByIdshop,order } from '../controller/order.js'

const orderroute = express.Router();
orderroute.post('/create/:id',order)
orderroute.get('/orderproduct/:id',getOrderById)
orderroute.get('/orderproduct/shop/:shopid',getOrderByIdshop)
orderroute.put('/approveorder/:id',approveorder)
orderroute.put('/cancelorder/:id',cancelorder)
export default orderroute;