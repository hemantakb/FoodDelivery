import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'



const Cart = () => {
  const navigate=useNavigate()
  const {food_list,cartItems,removeCart,getCartAmount,currency,delivery_fee}=useContext(ShopContext)
  return (
   <div>
    <div className=' font-bold   border-b items-center p-2 grid grid-rows-1 grid-cols-6'>
      <p>Item</p>
      <p>Name</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
     <div className='flex flex-col  '>
          { 
          
            food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                
                
                return(
                  <div key={index} className=' border-b items-center p-2 grid grid-rows-1 grid-cols-6'>
                    <img className=' w-20' src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{cartItems[item._id]*item.price}</p>
                    <p className=' cursor-pointer font-bold' onClick={()=>removeCart(item._id)}>X</p>
                  </div>
                )
              }
              
            })
          }
    </div>
    <div className='flex  flex-col my-5 sm:flex-row  gap-4'>
            <div className=' flex flex-1  sm:justify-between   flex-col '>
        <div className=' flex justify-between '>
          <p>Sub Total</p>
          <p>{currency}{getCartAmount()}</p>
        </div>
        <div className=' flex justify-between '>
          <p>Delivery fee</p>
          <p>{currency}{delivery_fee} </p>
          
        </div>
        <div className='  flex justify-between '>
          <b>Total</b>
          <b>{currency}{getCartAmount()===0||getCartAmount()===""?0:getCartAmount()+delivery_fee}</b>
        </div>
        <button onClick={()=>navigate('/placeOrder')} className='p-4 my-2 bg-black  text-white rounded-2xl'>PROCEDS TO CHECKOUT</button>
      </div>
      
      <div className=' flex-1 flex items-center'>
        <div className=' flex flex-col  w-full sm:flex-row  gap-2'>

          <input type="text" placeholder='Enter the promocode here...' className=' bg-gray-200 border-none p-2 w-full' />
          <button  className=' p-5 py-3  bg-orange-500 text-white'>Check</button>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Cart