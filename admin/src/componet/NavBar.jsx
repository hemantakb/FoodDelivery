import React from 'react'
import {assets} from '../assets/assets'

const NavBar = () => {
  return (
    <div>
         
         <div className='flex items-center justify-between mx-8 py-4 border-b'>
            <img className='w-30' src={assets.logo} alt="" />
            <img className='w-15' src={assets.profile_image} alt="" />
         </div>

    </div>
  )
}

export default NavBar