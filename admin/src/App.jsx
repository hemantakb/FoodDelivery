import React from 'react'
import NavBar from './componet/NavBar'
import { Route, Routes } from 'react-router'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import SideBar from './componet/SideBar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import Login from './componet/Login'
import { useEffect } from 'react'

export const backendUrl=import.meta.env.VITE_BACKEND_URL
const App = () => {
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  },[])
  const [token,setToken]=useState('')
  return (
    <>
    {
      token?<div className='bg-gray-100'>
      <ToastContainer/>
      <NavBar/>

      <div  className='flex sm:gap-14 gap-2 ' >
       
       <div className='border-r min-h-screen'>
         <SideBar/>
       </div>
      

       <div className=' sm:min-w-md'>
         <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
        </div>
        </div> 
     

    </div>:<Login setToken={setToken}/>
    }
    </>
  )
}

export default App