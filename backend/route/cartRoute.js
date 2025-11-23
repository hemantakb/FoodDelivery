import express from 'express'
import authUser from '../middleware/authUser.js'
import { addToCart, getCart, removeCart } from '../controller/cartControllers.js'

const cartRouter=express.Router()

cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/remove',authUser,removeCart)
cartRouter.get('/get',authUser,getCart)

export default cartRouter;