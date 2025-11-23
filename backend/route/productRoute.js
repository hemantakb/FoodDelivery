import express from "express"

import { addProduct, list, remove } from "../controller/productConterollers.js"
import upload from "../middleware/multer.js"
import authAdmin from "../middleware/adminAuth.js"

const productRoute=express.Router()

productRoute.post('/add',upload.single("image"),authAdmin,addProduct)
productRoute.get('/list',list)
productRoute.post('/remove',remove)




export default productRoute