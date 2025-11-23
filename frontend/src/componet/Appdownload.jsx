import React from 'react'
import { assets } from '../assets/assets'

const Appdownload = () => {
  return (
    <div className='text-4xl font-bold text-center '>
        <p>For Better Experience Download  <br />Tomato App</p>
        <div className=' flex items-center my-8 justify-center gap-4'>
          <img src={assets.play_store} className=' w-16 sm:w-50 hover:scale-110 transition-all ease-in-out duration-300' alt="" />
          <img src={assets.app_store} className=' w-16 sm:w-50 hover:scale-110 transition-all ease-in-out duration-300' alt="" />
        </div>
    </div>
  )
}

export default Appdownload