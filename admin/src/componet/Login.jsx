import axios from 'axios'
import React from 'react'
import { backendUrl } from '../App'
import { useState } from 'react'

const  Login = ({setToken}) => {
  const [formData,setFormData]=useState({
    email:"",
    password:''
  })
  const handelChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
    const handelSubmit=async(e)=>{
 e.preventDefault()

  try {
    const res=await axios.post (backendUrl + 'api/user/admin',{email:formData.email,password:formData.password})
    console.log(res);
    if(res.data.success){
      setToken(res.data.token)
      localStorage.setItem('token',res.data.token)
    }
    
  } catch (error) {
    console.log(error);
    
  }
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen
    '>
          <h1 className='text-3xl font-bold py-4'>Here is the login page of admin</h1>
        <form onSubmit={handelSubmit}  className=' rounded-md shadow px-4 py-3 mb-6 bg-gray-50 flex flex-col w-96  sm:w-[300px] gap-3 '>
          
            <div>
            <label className='w-full flex flex-col gap-2' htmlFor="email">
                <p>Enter email</p>
                <input onChange={handelChange} name='email' value={formData.email} className='w-full border px-4 py-3 outline-none rounded-md'  type="email" id="email" />
            </label>
             <label className='w-full flex flex-col gap-2' htmlFor="password">
                <p>Enter password</p>
                <input onChange={handelChange} name='password' value={formData.password} className='w-full border px-4 py-3 outline-none rounded-md'  type="password"  id="password" />
            </label>
            </div>
            <button type='submit' className='w-19 px-4 py2 rounded-md text-white bg-black'>Login</button>
        </form>
    </div>
  )
}

export default Login