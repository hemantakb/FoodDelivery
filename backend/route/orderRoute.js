import express from 'express'
import { allOrder, listOrder, placeOrder, updateStatus, verifyPayment } from '../controller/orderControllers.js'
import authUser from '../middleware/authUser.js'


const orderRouter=express.Router()


orderRouter.post('/placeOrder',authUser,placeOrder)
orderRouter.post('/verify',authUser,verifyPayment)
orderRouter.post('/all',authUser,allOrder)
orderRouter.get('/list',listOrder)
orderRouter.post('/update',updateStatus)
export default orderRouter