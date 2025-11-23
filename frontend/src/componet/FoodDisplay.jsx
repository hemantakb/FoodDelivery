import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(ShopContext)
    return (
        <div className=' my-8'>
            <h1 className=' text-6xl my-4'>Top Dishes near's u</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 my-4'>
                {
                    food_list.map((item, index) => {
                        if(category==='All'|| category===item.category){

                            return (
                            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}

export default FoodDisplay