import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext=createContext()


const ShopContextProvider=(props)=>{
  const navigete=useNavigate()
  useEffect(()=>{
if(!token && localStorage.getItem('token'))
  setToken(localStorage.getItem('token'))
},[])
const removeToken=()=>{
  
  localStorage.removeItem('token')
  setToken('')

}
  const [token,setToken]=useState('')
  const backendUrl=import.meta.env.VITE_BACKEND_URL
  const [cartItems, setcartItems] = useState({})
  const addToCart=async(itemId)=>{
    if(!cartItems[itemId]){
      setcartItems((prev)=>({...prev,[itemId]:1}))
    }
    
    else{
      setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
      await axios.post(backendUrl + 'api/cart/add',{itemId},{headers:{token}})
    }
  }
  // const removeCart=async(itemId)=>{
  //   setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  //   if(token){
  //     await axios.post(backendUrl + 'api/cart/remove',{itemId},{headers:{token}})
  //   }
  // }
  const removeCart = async (itemId) => {
  setcartItems(prev => {
    const count = prev[itemId] || 0;
    return {...prev, [itemId]: Math.max(count - 1, 0)};
  });

  if (token) {
    await axios.post(backendUrl + 'api/cart/remove', { itemId }, { headers: { token } });
  }
};

  const loadCartdata=async(token)=>{
    const res=await axios.get(backendUrl+'api/cart/get',{headers:{token}})
    setcartItems(res.data.cartData|| {} )
  }

  const getCartAmount=()=>{
    let totalCount=0;
    for(const item in cartItems){
      let cartInfo=food_list.find((product)=>product._id.toString()===item)
      if(cartItems[item]>0){
        totalCount+=Number(cartInfo.price) * Number(cartItems[item]);
      }
    }
    return totalCount
  }
 useEffect(() => {
  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    setToken(savedToken);
    loadCartdata(savedToken);
  }
}, []);

const currency='$'
const delivery_fee=2
const value={
currency,food_list,cartItems, setcartItems,addToCart,removeCart,getCartAmount,
delivery_fee,backendUrl,token,setToken,removeToken
}
    return(
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider