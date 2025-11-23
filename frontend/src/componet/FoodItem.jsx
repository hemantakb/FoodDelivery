import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const FoodItem = ({id,name,image,description,price}) => {
    const {currency,cartItems,addToCart,removeCart,food_list}=useContext(ShopContext)
    // const [cartItems, addToCart] = useState(0)
  return (
    <div className=' relative shadow-2xl shadow-gray-400 flex flex-col'>
        <img className='  rounded-tl-lg rounded-tr-lg' src={image} alt="" />
        {cartItems && cartItems[id] > 0 ? 
        <div className='  absolute top-0 bottom-0 right-4  gap-4 flex items-center justify-around'>
           <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
           <p className=' text-orange-500 font-bold text-shadow-2xs shadow-orange-500 text-2xl'> {cartItems[id] }</p>
           <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>

        :        <img onClick={()=>addToCart(id)} src={assets.add_icon_white} className=' flex  absolute top-40 bottom-0 right-4  ' alt="" />


        }
        <div className='flex pl-3 p-3 items-start flex-col gap-2'>
           <div className='  w-full flex items-center justify-between'>
             <p className=' text-lg font-bold'>{name}</p>
            <img src={assets.rating_starts} alt="" />
           </div>
            <p>{description}</p>
            <p >{currency}{price}</p>
        </div>
    </div>
  )
}

export default FoodItem