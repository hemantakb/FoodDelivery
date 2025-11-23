import {v2 as cloudinary} from "cloudinary"
import foodModel from "../model/foodModel.js"

const addProduct=async(req,res,next)=>{
 
 try{

    const {name,description,price,category}=req.body
    const image=req.file
    let imageUrl=""
    if(image){
        const result =await cloudinary.uploader.upload(image.path,{
            resource_type:'image'
        })
        imageUrl=result.secure_url
    }
    const productInfo={
        name,
        description,
        price:+(price),
        category,
        image:imageUrl

    }
    const product=await foodModel(productInfo)
    await product.save()
    res.json({
        success:true,
     message:'Poduct added succesfully',
        product
    })
    console.log(imageUrl);
    
 }
 
catch (error) {
    console.log(error);
    res.json({
        success:false,
        message:error.message
    })
    
    
 }

}

const list=async(req,res,next)=>{
try {
    const product=await foodModel.find({})
    res.json({
        success:true,
        product
    })
} catch (error) {
    console.log(error);
    res.json({
        success:false,
        message:error.message
    })
    
}
}
const remove=async(req,res,next)=>{
   try {
     const {id}=req.body
    await foodModel.findByIdAndDelete(id)
    res.json({
        success:true,
        message:"product remove successfully"
    })
   } catch (error) {
     console.log(error);
    res.json({
        success:false,
        message:error.message
    })
   }
}

export {addProduct,remove,list}