import React from 'react'
import { NavLink } from 'react-router'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='sm:min-w-72'>

        <div className='border border-r-0  ml-8 my-8'>
            <NavLink to={'/add'} className='flex gap-3 px-4 py-3 items-center sm:justify-between'>
                <img src={assets.add_icon} alt="" className='w-8' />
                <p className='sm:block hidden  font-semibold '>Add</p>
                
            </NavLink>
        </div>
        <div className='border border-r-0  ml-8 my-8'>
            <NavLink to={'/list'} className='flex gap-3 px-4 py-3 items-center sm:justify-between'>
                <img src={assets.order_icon} alt="" className='w-8' />
                <p className='sm:block hidden  font-semibold '>List</p>
                
            </NavLink>
        </div>
        <div className='border border-r-0  ml-8 my-8'>
            <NavLink to={'/order'} className='flex gap-3 px-4 py-3 items-center sm:justify-between'>
                <img src={assets.order_icon} alt="" className='w-8' />
                <p className='sm:block hidden  font-semibold '>Order</p>
                
            </NavLink>
        </div>

    </div>
  )
}

export default SideBar