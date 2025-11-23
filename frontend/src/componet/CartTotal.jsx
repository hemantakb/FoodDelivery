import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {cartItems,removeCart,getCartAmount,currency,delivery_fee}=useContext(ShopContext)
  return (
    <div className='shadow px-4 py-2  bg-gray-100 w-full sm:w-auto  rounded-md'>
      
      <div className='flex flex-col my-5 sm:flex-row  gap-4'>
            <div className=' flex w-full sm:w-[440px]  sm:justify-between   flex-col '>
        <div className=' flex justify-between '>
          <p>Sub Total</p>
          <p>{currency}{getCartAmount()}</p>
        </div>
        <hr />
        <div className=' flex justify-between '>
          <p>Delivery fee</p>
          <p>{currency}{delivery_fee} </p>
        
          
        </div>
        <hr className='border-2' />
        <div className='  flex justify-between '>
          <b>Total</b>
          <b>{currency}{getCartAmount()===0||getCartAmount()===""?0:getCartAmount()+delivery_fee}</b>
        </div>
      </div>
      
      {/* <div className=' flex-1 flex items-center'>
        <div className=' flex flex-col  w-full sm:flex-row  gap-2'>

          <input type="text" placeholder='Enter the promocode here...' className=' bg-gray-200 border-none p-2 w-full' />
          <button  className=' p-5 py-3  bg-orange-500 text-white'>Check</button>
        </div>

      </div> */}
    </div>
      


    </div>
  )
}

export default CartTotal