import orderModel from "../model/orderModel.js"
import userModel from '../model/userModel.js'
import Stripe from 'stripe'


const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
const currency = "inr";
const delivery_fee = 10;


const placeOrder=async(req,res)=>{
  const userId=req.userId
    const {items,address,amount}=req.body
    const { origin } = req.headers;
    try {
        let orderData={
            userId,
            items,
            address,
            amount,
            payment:false
        }
        const newOrder=new orderModel(orderData)
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        await newOrder.save()
       const line_items=items.map((item)=>({
          price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: delivery_fee * 100,
      },
      quantity: 1,
    });
    const session=await stripe.checkout.sessions.create({
        success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
        line_items,
      mode: "payment",
    })
res.json({
    success:true,
    session_url:session.url
})
    } catch (error) {
        console.log(error);
        res.json({
       success:false,
       message:error.message            
        })
        
    }
}

const verifyPayment=async(req,res)=>{
  const {success,orderId}=req.body;
  try {
    if(success==="true"){
      await orderModel.findByIdAndUpdate(orderId,{payment:true})
      res.json({
        success:true,
        message:"Order Done"
      })
    }else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false,
        message:'Not paid'}
      )
    }
  } catch (error) {
    
  }
}

const allOrder=async(req,res,next)=>{
  const userId=req.userId
  try {
    const order =await orderModel.find({userId})
    res.json({
      success:true,
      data:order
    })
  } catch (error) {
    console.log(error);
    res.json({
      success:false,
      message:error.message
    })
    
  }
}

const listOrder=async(req,res)=>{
  try {
    const order=await orderModel.find({})
    res.json({
      success:true,
      data:order
    })
  } catch (error) {
    console.log(error);
   res.json({
    success:false,
     message:error.message
   })
    
  }
}


const updateStatus=async(req,res)=>{
  const{orderId,status}=req.body
  try {
   await orderModel.findByIdAndUpdate(orderId,{status})
   res.json({
    success:true,
    message:"Status updated"
   })
    
  } catch (error) {
    console.log(error);
    re.json({
      success:false,
      message:error.message
    })
    
  }
}







export {placeOrder,verifyPayment,allOrder,listOrder,updateStatus}