import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = ({ setShowLogin }) => {
    const navigate=useNavigate()
     const {token,setToken,removeToken}=useContext(ShopContext)
    
   
    return (
        <div className=' flex items-center justify-between my-8 ' >
            <Link to={'/'}>
                <img src={assets.logo} className='w-24 sm:w-34' alt="" />
            </Link>
            <div className=' sm:flex gap-4  hidden '>
                <NavLink to={'/'} className='flex items-center flex-col'>
                    <p>HOME</p>
                    <hr className=' w-2/4 h-[2px] bg-black border hidden' />
                </NavLink>
                <NavLink to={'/cart'} className='flex items-center flex-col'>
                    <p>CART</p>
                    <hr className=' w-2/4 h-[2px] bg-black border hidden' />
                </NavLink>
                <NavLink to={'/mobileApp'} className='flex items-center flex-col'>
                    <p>MOBILE APP</p>
                    <hr className=' w-2/4 h-[2px] bg-black border hidden' />
                </NavLink>
            </div>
            <div className=' flex  justify-between items-center gap-2 sm:gap-9'>
                <img src={assets.search_icon} className='w-6' alt="" />
                <div className=' relative'>
                    <Link to={'/cart'}>
                        <img src={assets.basket_icon} className='w-6' alt="" />
                    </Link>
                    <p className=' absolute top-[-8px] right-[-6px] w-[8px] h-[8px] rounded-full bg-orange-600 '></p>

                </div>
{
    !token &&<button onClick={() =>!token && setShowLogin(true)} className=' p-6 border rounded-full py-1 active:bg-orange-200'>Sign in</button>

}             
                  {/* ✅ Dropdown only when logged in */}
       {token && (
  <div className="relative group inline-block">
    <img
      src={assets.profile_icon}
      alt="profile"
      className="w-8 cursor-pointer"
    />

    <ul className="absolute right-0 top-full bg-white shadow-lg rounded-md p-3 w-32 hidden group-hover:block">
      <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer">Profile</li>
      <li className="py-2 px-2 hover:bg-gray-100 cursor-pointer">Orders</li>
      <li onClick={removeToken} className="py-2 px-2 hover:bg-gray-100 cursor-pointer">Logout</li>
    </ul>
  </div>
)}

            </div>
        </div>
    )
}

export default Navbar