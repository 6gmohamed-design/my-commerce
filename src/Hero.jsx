import React from 'react'
import hand_icon from './assets/hand_icon.png'
import arrow_icon from './assets/arrow.png'
import hero_image from './assets/hero_image.png'
import { motion } from "motion/react"

// 180deg,#fde1ff,#e1ffea22 60%
const Hero = () => {
  return (
   
    <motion.div  initial={{opacity:0}} animate={{opacity:1 ,y:0 ,rotateX:10}} exit={{opacity:0}} transition={{duration:1}} className='container-fluid mx-auto flex justify-between  items-center max-h-full' style={{background:"linear-gradient(180deg,#fde1ff,#e1ffea22 60%)"}}>
        <div className='w-[80%] flex justify-between mx-auto items-center'>
        <div className='max-h-full max-w-full '>
        
            <p className='text-xl font-bold text-gray-500 mb-2'>New Arrivals only</p>
            <h1 className='text-5xl font-bold'> <span className='text-red-500 flex items-center'>new <img src={hand_icon} alt="hand_icon" className='w-12 h-12' /></span> collection <span className='text-red-500 flex items-center'>for everyone</span></h1>
            <button className='bg-red-500  hover:bg-red-600 transition-all delay-100 mt-5 w-[90%] py-2 hover:duration-300 ease-in-out hover:text-white rounded flex items-center justify-between hover:scale-105 hover:shadow-lg hover:shadow-red-500 px-5'>latest collection <img src={arrow_icon} alt="arrow_icon" className='h-8 w-8 rotate-180 transition-all delay-100 hover:duration-300 ease-in-out hover:scale-105 hover:rotate-0 object-contain content-center' /></button>
            
    </div>
            <div   className='max-h-full max-w-full '>
            <img src={hero_image} alt="hero_image" className='max-w-full max-h-full object-cover '/>
        </div>
        </div>
            
   
    </motion.div>
   
    
  )
}

export default Hero