import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext} from 'react'
import { ShopContext} from '../context/ShopContext'
import {toast} from 'react-toastify'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Login = ({setShowLogin}) => {
  const navigate=useNavigate()
  const {backendUrl,token,setToken,removeToken}=useContext(ShopContext)
    const [currentState, setCurrentState] = useState("Sign Up")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const handelChange=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    
   const handelSubmit=async(e)=>{
 e.preventDefault()
 try {
  if(currentState==='Login'){
    const res=await axios.post(backendUrl + 'api/user/login',{email:data.email,password:data.password})
   if(res.data.success){
    setToken(res.data.token)
    localStorage.setItem('token',res.data.token)
    setShowLogin(false)
    navigate('/')
   }else{
    toast.error(res.data.message)
   }
    
  }else{
    const res=await axios.post(backendUrl + "api/user/register",{name:data.name,email:data.email,password:data.password})
    localStorage.setItem('token',res.data.token)
    if(res.data.success){
    setToken(res.data.token)
    
    setShowLogin(false)
    navigate('/')
   }else{
    toast.error(res.data.message)
   }
    
  }
 } catch (error) {
  console.log(error);
  toast.error(error.message)
  
 }
   }
  return (
    <form onSubmit={handelSubmit}  className='fixed inset-0 backdrop-blur-sm  bg-opacity-50 '>
      <div className=' absolute sm:left-[40%] top-[5%] sm:top-[20%]  z-50 bg-white p-2 border rounded-2xl flex flex-col'>
    <div className=' flex flex-col bg-white  p-4 my-6'>
           <div className=' flex items-center justify-between'>
        <h1 className=' text-6xl'>{currentState}</h1>
         <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
       </div>
       <div className=' flex flex-col  gap-4 py-2 '>
        {
            currentState==='Login'?'':
            <input onChange={handelChange} value={data.name} name='name' type="text" placeholder=' Enter your name' className=' w-full p-4 py-2 outline-none border ' />
        }
                    <input onChange={handelChange} value={data.email} name='email' type="email" placeholder=' Enter your mail' className=' w-full p-4 py-2 outline-none border ' />
            <input onChange={handelChange} value={data.password} name='password' type="password" placeholder=' Enter your name' className=' w-full p-4 py-2 outline-none border ' />

       </div>
       <button type='submit' className='p-4 py-2 bg-black text-white '>{currentState==='Login'?'Sign in':'Sign Up'}</button>
       <div className=' flex items-center gap-4 py-2 '>
         <input type="checkbox"  />
         <p>By cheking this continue to use our services</p>
       </div>
       <div className=' flex items-center gap-4 py-2'>
        {
            currentState==='Login'
            ?<p>Don't have an account?</p>: <p>Already have an account?</p>
        }
        {currentState==='Login'?
      <button type='button' className=' p-4 py-2 bg-black text-white ' onClick={()=>setCurrentState('Sign Up')}>Create account</button>  : 
      <button type='button' className=' p-4 py-2 bg-black text-white ' onClick={()=>setCurrentState('Login')}>Login here</button>   
    }
       </div>
    </div>
    </div>
    </form>
  )
}

export default Login