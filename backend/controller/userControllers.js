import jwt from 'jsonwebtoken'
import bcrypt, { genSalt } from "bcrypt"
import validator from 'validator'
import userModel from '../model/userModel.js'

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const Login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await userModel.findOne({email})
        if(!user) return res.status(400).json({
            success:false,
            message:'User not exists'
        })
        const matchPassword=await bcrypt.compare(password,user.password)
        if(!matchPassword) return res.status(400).json({
            success:false,
            message:'Password not match'
        })
        const token=generateToken(user._id)
        return res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }
}

const Register=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const exists=await userModel.findOne({email})
        if(exists) return res.status(400).json({
            success:false,
            message:'User already exists'
        })
        if(!validator.isEmail(email)) return res.status(400).json({
            success:false,
            message:"Enter a valid email"
        })
        if(password.length<8) return res.status(400).json({
            success:false,
            message:"Please enter a password greater than eight"
        })
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)
        const userData={
            name,
            email,
            password:hashPassword
        }
        const newUser=new userModel(userData)
        await newUser.save()
        const token=generateToken(newUser._id)
        res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }
}
const adminLogin=async(req,res,next)=>{
    try {
        const {email,password}=req.body
        if(email===process.env.Email && password===process.env.Password){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            return res.json({
                success:true,
                token
            })
        }
         return res.json({
      success: false,
      message: "Invalid email or password"
    })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }
}

export {adminLogin,Login,Register}