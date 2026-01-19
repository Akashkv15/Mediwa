import express from 'express'
import  {deleteproduct, getallproducts, getsingleproduct, orderproduct, product, productdata,  updateproduct} from '../controller/addproduct.js'
import { upload } from '../Middleware/multer.js'
const productroute=express.Router()
productroute.post('/addproduct/:id',upload.single('image'),product)
productroute.get('/getproduct/:id',productdata)
productroute.get('/edit/:id',getsingleproduct)
productroute.put('/updateproduct/:id',updateproduct)
productroute.delete('/delete/:id',deleteproduct)
productroute.get('/userproducts',getallproducts)
productroute.get('/orderproduct/:id',orderproduct)

export default productroute;