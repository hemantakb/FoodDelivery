import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Order = () => {
 const {backendUrl,token}=useContext(ShopContext)
 const [data,setData]=useState([])
    const fetchAllOrder=async()=>{
        try {
            const res=await axios.post(backendUrl + 'api/order/all',{},{headers:{token}})
            setData(res.data.data);
            console.log(res);
            
            
        } catch (error) {
           console.log(error);
            
        }
    }
    useEffect(()=>{
        fetchAllOrder()
    },[token])
    useEffect(()=>{
 if(data){
    console.log(data);
 }else{
    console.log('error occusrs');
    
 }

    },[])
  return (
    <div className='flex flex-col space-y-3'>
        {
           data &&  data.map((order,index)=>{
                return (     <div key={index} className=' border px-3 py-1 bg-gray-50 grid sm:grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_2fr] items-center'>
                    <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                       return item.name + " X " +item.quantity
                    }else{
                        return item.name + " X " +item.quantity +","
                    }
                })}</p>
                <p>{order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p className='flex gap-1 items-center'><span className='text-orange-400 text-4xl '>&#8226;</span><b>{order.status}</b></p>
                 <button onClick={()=>fetchAllOrder()} className='bg-orange-300 border border-orange-400 px-2 py-1 rounded-md'>Track your order</button>
                  
                </div>)
            })
        }
    </div>
  )
}

export default Order