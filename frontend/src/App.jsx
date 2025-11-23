import React, { useState } from 'react'
import Navbar from './componet/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/cart'
import PlaceOrder from './pages/PlaceOrder'
import Fotter from './componet/Fotter'
import Login from './componet/Login'
import Verify from './componet/Verify'
import Order from './pages/Order'


const App = () => {
  
  const [showLogin, setShowLogin] = useState(false)
  return (
    
   <>
   { showLogin?
   <Login setShowLogin={setShowLogin}/>
   :<></>

   }
    <div className=' px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/placeOrder' element={<PlaceOrder/>} />
       <Route path='/verify' element={<Verify/>}/>
       <Route path='/order' element={<Order/>} />
      </Routes>
    
    </div>
      <Fotter/>
   </>
  )
}

export default App