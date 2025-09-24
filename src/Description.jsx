import React from 'react'
import { motion } from "motion/react"
const Description = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 ,y:0 ,scale:1.1 ,rotateX:10 }} exit={{opacity:0}} transition={{duration:1}} className='max-w-[80%] h-full flex flex-col my-10 py-5 mx-auto justify-center items-center gap-2'>
      <div className='flex gap-2 items-center'>
        <h1 className='text-2xl font-bold text-gray-800 text-center hover:text-red-500 transition-all duration-300'>Description</h1>
        <p className='text-sm text-gray-500 italic text-center hover:text-red-500 transition-all duration-300'>Recently viewed (555)</p>
      </div>
      <div className='h-full my-1 py-5 mx-auto flex justify-center items-center gap-2'>
        <p className='text-base leading-relaxed text-gray-700 text-center tracking-wide'>
          <span className='font-semibold text-emerald-700'>Discover</span> stylish, affordable fashion for the whole family. Our e-commerce store offers 
          <span className='text-pink-600 font-medium'> trendy clothing</span> for kids, men, and women—perfect for every season and occasion. From casual wear to elegant outfits, explore 
          <span className='text-indigo-600 font-medium'> quality fabrics</span>, vibrant designs, and unbeatable prices. 
          <span className='font-semibold text-amber-700'>Shop effortlessly</span> and elevate your wardrobe with comfort and style.
        </p>
      </div>
    </motion.div>
  )
}

export default Description