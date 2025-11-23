import userModel from '../model/userModel.js'


const addToCart=async(req,res)=>{
    const userId=req.userId
  const {itemId}=req.body
    try {
        const userData=await userModel.findById(userId)
        const cartData=await userData.cartData
        if(cartData[itemId]){
            cartData[itemId]+=1
        }else{
            cartData[itemId]=1
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({
            success:true,
            message:'Product added to the cart'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
            
        })

        
    }
}

const removeCart=async(req,res)=>{
    const userId=req.userId
    const {itemId}=req.body
    try {
       const userData=await userModel.findById(userId) 
       const cartData=await userData.cartData
       if(cartData[itemId]>0){
        cartData[itemId]-=1
       }
       await userModel.findByIdAndUpdate(userId,{cartData})
       res.json({
        success:true,
        message:'Product remove succesfully'
       })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
              message:error.message
        })
      
        
    }
}

const getCart=async(req,res)=>{
    const userId=req.userId
    try {
        const userData=await userModel.findById(userId)
        const cartData=await userData.cartData
    if(cartData){
        return res.json({
            success:true,
            cartData
        })
    }
    } catch (error) {
         console.log(error)
        res.json({
            success:false,
              message:error.message
        })
    }
}

export {addToCart,removeCart,getCart}