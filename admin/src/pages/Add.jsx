
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = () => {
    const [image,setImage]=useState(null)
    const [data,setData]=useState({
        name:'',
        description:'',
        category:'',
        price:''
    })
    const handelChang=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const onsubmitHandeler=async(e)=>{
        e.preventDefault()
        console.log(data);
        console.log(backendUrl);
        
        console.log(image);
        try {
            const formData=new FormData()      
            formData.append('name',data.name),
                formData.append('price',data.price),
                formData.append('description',data.description),
                formData.append('category',data.category),
                image && formData.append('image',image)

            const res=await axios.post( backendUrl + 'api/product/add',formData)
            if(res.data.success){
                toast.success('Product added succesfully')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
        
        
    }
  return (
    <div>
        <form onSubmit={onsubmitHandeler} className=' sm:w-[450px] flex flex-col gap-4' >
            <div className='flex flex-col py-4  gap-3'>
                <p>Upload image</p>
                <label htmlFor="image1">
          <img src={image?URL.createObjectURL(image):assets.upload_area} className='size-12' alt="" />
          <input onChange={(e)=>setImage(e.target.files[0])}  type="file" name="" className='hidden' id="image1" />
        </label>
            </div>
            <div className='flex flex-col gap-3'>
                <p>Product Name</p>
                <input onChange={handelChang} value={data.name} className='w-full border rounded-md px-2 py-1 outline-none' placeholder='Enter Product name' type="text" name='name' />
            </div>
            <div className='flex flex-col gap-3'>
                <p>Product description</p>
                 <textarea onChange={handelChang} value={data.description} className='w-full border rounded-md px-2 py-1 outline-none' placeholder='Enter Product Description' name="description" id=""></textarea>
                </div>
            <div className='flex sm:flex-row flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <p>Product Categoty</p>
                    <select onChange={handelChang} value={data.category} className='border px-4 py-2 ' name="category" id="">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwitch">Sandwitch</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure-Veg">Pure veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>Product Price</p>
                    <input onChange={handelChang} value={data.price} name='price' className='w-full border rounded-md px-2 py-1 outline-none' placeholder='Enter Product' type="number"  />
                </div>
            </div>
            <button className='w-25 px-4 text-white bg-black rounded-md py-2' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Add