import React, { useEffect } from 'react'
import { useState } from 'react'

import CartTotal from '../componet/CartTotal'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
    const {food_list,backendUrl,cartItems,removeCart,getCartAmount,currency,delivery_fee,token}=useContext(ShopContext)
  
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    country:"",
    state:"",
    number:"",
    zipcode:""
  })
  const handelChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const placeOrder=async(e)=>{
    e.preventDefault()
    let orderData=[]
   food_list.map((item)=>{
    if(cartItems[item._id]>0){
      let itemInfo=item
      itemInfo['quantity']=cartItems[item._id]
      orderData.push(itemInfo)

    }
   })
  console.log(orderData);
  let orderDetails={
    address:data,
    items:orderData,
    amount:getCartAmount()+2
  }
  let res=await axios.post(backendUrl + 'api/order/placeOrder',orderDetails,{headers:{token}})
  if(res.data.success){
    const {session_url}=res.data
    window.location.replace(session_url)
  }else{
    console.log("An even error ouccurs");
    
  }
   
  }
  const navigate=useNavigate()
useEffect(()=>{
if(!token){
  navigate('/cart')
}else if(getCartAmount()===0){
navigate('/cart')
}
},[token])
  return (
    <div className='flex flex-col sm:px-34'>

       <form onSubmit={placeOrder} className='flex flex-col gap-3 mx-3 my-3 w-full sm:w-[450px]' >
          
          <div className='w-full flex gap-2 flex-col'>
            <input onChange={handelChange} type="text" placeholder='FirstName' value={data.firstName} name='firstName' className='border w-full rounded-md px-2 py-1 ' />
            <input onChange={handelChange} type="text" placeholder='lastName' value={data.lastName} name='lastName' className='border w-full rounded-md px-2 gap-2 ' />
          </div>
          <div className='w-full flex gap-2 flex-col  sm:flex-row'>
            <input onChange={handelChange} type="email" placeholder='Enter your email' value={data.email} name='email' className='border w-full rounded-md px-2 py-1 ' />
            <input onChange={handelChange} type="text" placeholder='Enter your street' value={data.street} name='street' className='border w-full rounded-md px-2 py-1 ' />
          </div>

          <div className='w-full flex gap-2 flex-col'>
            <input onChange={handelChange} type="text" placeholder='Enter your State' value={data.state} name='state' className='border w-full rounded-md px-2 py-1 ' />
            <input onChange={handelChange} type="text" placeholder='Enter your Country' value={data.country} name='country' className='border w-full rounded-md px-2 py-1 ' />

          </div>
          <div className='w-full flex flex-col gap-2 sm:flex-row'>
            <input onChange={handelChange} type="number" placeholder='Enter your zipcode' value={data.zipcode} name='zipcode' className='border w-full rounded-md px-2 py-1 ' />
            <input onChange={handelChange} type="number" placeholder='Enter your number' value={data.number} name='number' className='border w-full rounded-md px-2 py-1 ' />
          </div>
         
        <button type='submit' className='p-4 my-2 bg-black  text-white rounded-2xl'>Place Order</button>

       </form>

       <div className='flex sm:justify-end'>
        <CartTotal/>

        </div> 
       

    </div>
  )
}

export default PlaceOrder