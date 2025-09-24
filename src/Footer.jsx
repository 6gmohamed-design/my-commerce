import React from 'react'
import footer_logo from './assets/logo_big.png'
import instagram from './assets/instagram_icon.png'
import  pintester from './assets/pintester_icon.png'
import whatsapp from './assets/whatsapp_icon.png'
 
const Footer = () => {
  return (
    <div className='max-w-[80%] mx-auto mt-10'>
      <div className='flex items-center gap-5 justify-center'>
        <img src={footer_logo} alt="" />
        <p className=' text-black font-bold font-sans uppercase text-6xl'>shopper</p>
        </div>
        <div className='flex justify-center items-center my-10'>
            <ul className='list-none flex gap-5 justify-center items-center text-center mx-auto'>
                <li><a href="#company" className={"hover:text-gray-500 hover:font-bold transition duration-300 ease-in-out hover:underline  "}>company</a></li>
                <li><a href="#products" className={"hover:text-gray-500 hover:font-bold transition duration-300 ease-in-out hover:underline"}>products</a></li>
                <li><a href="#offers" className={"hover:text-gray-500 hover:font-bold transition duration-300 ease-in-out hover:underline"}>offers</a></li>
                <li><a href="#about" className={"hover:text-gray-500 hover:font-bold transition duration-300 ease-in-out hover:underline"}>about</a></li>
                <li><a href="#contact" className={"hover:text-gray-500 hover:font-bold transition duration-300 ease-in-out hover:underline"}>contact</a></li>
            </ul>
        </div>
        <div className='flex justify-center items-center gap-5 my-10'>
            <img src={instagram} alt="" className='w-10 h-10 hover:scale-110 transition duration-300 ease-in-out hover:bg-amber-500 hover:rounded-lg hover:cursor-pointer'/>
            <img src={pintester} alt="" className='w-10 h-10 hover:scale-110 transition duration-300 ease-in-out hover:bg-amber-500 hover:rounded-lg hover:cursor-pointer'/>
            <img src={whatsapp} alt="" className='w-10 h-10 hover:scale-110 transition duration-300 ease-in-out hover:bg-amber-500 hover:rounded-lg hover:cursor-pointer'/>
        </div>
        <hr />
        <div className='mt-10'>
            <p className=' text-center text-gray-500 font-medium text-lg '>© 2025 shopper. All rights reserved.</p>
        </div>
      </div>
        
       
  
  )
}

export default Footer