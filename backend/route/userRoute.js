import express from 'express'
import authAdmin from '../middleware/adminAuth.js'
import { adminLogin, Login, Register } from '../controller/userControllers.js'

const userRouter=express.Router()
userRouter.post('/register',Register)
userRouter.post('/login',Login)
userRouter.post('/admin',adminLogin)

export default userRouter