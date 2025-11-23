import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { useEffect } from 'react'
import { assets } from '../assets/assets'

const Order = () => {
  const [orders,setOrders]=useState([])
  const fetchAllOrder=async()=>{
    const res=await axios.get(backendUrl+'api/order/list')
    console.log(res);
    
   setOrders(res.data.data);
    
  }
  const statusHandeler=async(status,orderId)=>{
  try {
     const res=await axios.post(backendUrl + 'api/order/update',{orderId,status})
    if(res.data.success){
      await fetchAllOrder()
    }
  } catch (error) {
    console.log(error);
    
  }
  }
  useEffect(()=>{
 fetchAllOrder()
  },[])
  return (
    <div className=' flex flex-col space-y-4 py-8'>
       <h1> Order Page</h1>
       {
        orders.map((order,index)=>(
          <div key={index} className=' border px-5 py-2 bg-orange-50 rounded-md items-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-[1fr_2fr_1fr_0.5fr_1.2fr]' >
         <div>
             <img src={assets.parcel_icon} alt="" />
         <div>
             {
              order.items.map((item,index)=>{
                if(index===order.items.length-1){
       return <p>{item.name} X  {item.quantity}</p>
                }else{
                  return <p>{item.name +" X " + item.quantity}</p>
                }
              })
            }
              <div>
            <p>{order.address.firstName} {order.address.lastName}</p>
           

          </div>
         </div>
         </div>
         <div>
           <p>{order.address.street}</p>
            <p>{order.address.city+','+order.address.state+','+order.address.country+''}</p>
          <p>{order.address.phone}</p>
         </div>
          <div>
 
  <p>Method:{order.paymentMethod}</p>
  <p>Payment:{order.payment?'Done':'pending'}</p>
  <p>Date:{new Date(order.date).toDateString()}</p>
 </div>
 <p>Item:{order.items.length}</p>
   <select  value={order.status} onChange={(e)=>statusHandeler(e.target.value,order._id)} className=' ml-4 border px-2 py-1' >
    <option value="Food Processing">Food Processing</option>
    <option value="Out for delevery">Out for delevery</option>
    <option value="Delivered">Delivered</option>
   </select>
          </div>
        ))
       }
       
    </div>
  )
}

export default Order