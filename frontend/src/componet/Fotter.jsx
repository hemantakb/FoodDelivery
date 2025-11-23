import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
  return (
    <>
    <div className=' w-full my-8 mb-0 p-10 bg-gray-800 flex flex-col gap-4 sm:grid grid-cols-[4fr_1.5fr_1.5fr]'>
      <div className=' flex flex-col gap-4 '>
        <img className='w-36 ' src={assets.logo} alt="" />
        <p className=' w-3/4 text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. A culpa eveniet beatae veritatis libero quaerat soluta aperiam saepe. Atque tempore nam accusamus possimus labore ipsum eum aspernatur illo fugiat fugit!</p>
        <div className=' flex gap-4'>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className=' flex flex-col gap-5'>
        <h1 className=' text-3xl text-white font-bold'>Company</h1>
        <ul className=' flex flex-col gap-2 text-white'>
          <li className=''>HOME</li>
          <li className=''>MENU</li>
          <li className=''>MOBILE APP</li>
          <li className=''>CONTACT US</li>

        </ul>
      </div>
      <div className=' flex flex-col gap-4'>
        <h1 className=' text-3xl text-white font-bold'>Get in Touch</h1>
        <div className=' text-sm text-white flex flex-col gap-3'>
          <p>(+657)-7493-584</p>
          <p>tomato@gmail.com</p>
        </div>


      </div>

    </div>
<div className=' bg-gray-800 p-10'>
    <hr className=' border-none h-[3px] w-full bg-gray-400  my-6' />
<div  className='  text-center text-sm text-white'>
 <p>All right reserved  Copywrites@2025 Tomato.com</p>
</div>
</div>
    </>
  )
}

export default Fotter