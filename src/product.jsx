import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { contextprovider } from './contextprovider'
 import star_icon from './assets/star_icon.png'
 import { motion } from "motion/react"

const Product = () => {
  let [size,setSize]=useState("")
    const {productId} = useParams()
    const {all_products,addtoCart} = useContext(contextprovider)
    const product = all_products.find((product)=>product.id === Number(productId))
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 ,y:0 ,rotateX:0}} exit={{opacity:0}} transition={{duration:1}}>
      <p className='text-lg font-bold absolute top-30 left-10 text-gray-500'>home / shop / {product.name}</p>
    <div className='max-w-[80%] h-full  my-10 py-10 mx-auto min-h-[100vh] flex justify-center items-center gap-2'>
     
      <div className='flex gap-2 h-full'>
        <div className='flex gap-2 flex-col  h-full rounded-2xl'>
          <img src={product.image} alt="" className='w-[100px] h-[100px] object-cover' />
          <img src={product.image} alt="" className='w-[100px] h-[100px] object-cover' />
          <img src={product.image} alt="" className='w-[100px] h-[100px] object-cover' />
          <img src={product.image} alt="" className='w-[100px] h-[100px] object-cover' />
        </div>
        <div className='h-full w-full  rounded-2xl'>
          <img src={product.image} alt="" className='w-full h-full object-cover rounded-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-2 h-full'>
        <h2 className='text-2xl font-bold'>{product.name}</h2>
        <div className='flex gap-2 items-center mb-2'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
        </div>
        <div className='flex gap-2 items-center mb-2'>
        <p className='text-lg font-bold text-red-500'>{product.new_price} $</p>
        <p className='text-lg font-bold line-through text-gray-500' >{product.old_price} $</p>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2'>select size</h3>
          <div className='flex gap-2 items-center'>
            <button className='p-2 w-[50px] h-[50px]  rounded-sm border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300' onClick={()=> setSize("xs") }>xs</button>
            <button className='p-2 w-[50px] h-[50px]  rounded-sm border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300' onClick={()=> setSize("s")}> s</button>
            <button className='p-2 w-[50px] h-[50px] rounded-sm border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300' onClick={()=>  setSize("m")}>m</button>
            <button className='p-2 w-[50px] h-[50px] rounded-sm border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300' onClick={()=>setSize("l")}>l</button>
            <button className='p-2 w-[50px] h-[50px] rounded-sm border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300' onClick={()=>setSize("xl")}>xl</button>
          </div>
        </div>
       <p className='text-lg font-bold mb-2'>category: {product.category} T-shirt crop top</p>
       <p className='text-lg font-bold mb-2'>tags:modern latest</p>
        <button className='bg-black text-white p-2 rounded-2xl hover:bg-red-800 hover:text-white transition-all duration-300' onClick={()=>addtoCart(product.id,size)}>Add to Cart</button>
      </div>
    </div>
    </motion.div>
  )
}

export default Product