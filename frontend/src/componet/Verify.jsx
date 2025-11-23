import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {
    const navigete=useNavigate()
    const {token,backendUrl,setcartItems}=useContext(ShopContext)
    const [searchParams,setSearchParams]=useSearchParams()
    const orderId=searchParams.get('orderId')
    const success=searchParams.get('success')
    const verifyPayment=async()=>{
     try {
        if(!token) return null;
       const res=await axios.post(backendUrl+'api/order/verify',{orderId,success},{headers:{token}})
       if(res.data.success){
        setcartItems({})
        navigete('/order')

       }else{
        navigete('/cart')
       }
    
     } catch (error) {
        console.log(error);
        toast.error(error.message)
     }
   
   
    }

    useEffect(()=>{
        verifyPayment()
    },[token,orderId, success])
  return (
    <div className='flex items-center justify-center min-h-screen'>

            <div className='w-16 h-16 border-4 border-gray-300 border-t-orange-600 rounded-full animate-spin'></div>

    </div>
  )
}

export default Verify