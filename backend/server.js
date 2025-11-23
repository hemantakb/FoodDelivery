import express from "express"
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./config/connectDB.js"
import connctToCloudinary from "./config/connectCloundinary.js"
import productRoute from "./route/productRoute.js"
import userRouter from "./route/userRoute.js"
import cartRouter from "./route/cartRoute.js"
import orderRouter from "./route/orderRoute.js"


//app config
const app=express()
const port=process.env.PORT||4000
connectDB()
connctToCloudinary()

//middeleware
app.use(express.json())
app.use(cors())


//api end points
app.get('/',(req,res,next)=>{
    res.send("This is  server home page")
})

app.use('/api/product',productRoute)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
    
})