import React, { useState } from 'react';
import logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { contextprovider } from './contextprovider';
import { motion } from 'framer-motion';

const Nav_bar = () => {
  let [menu, setMenu] = useState("shop");
  const { count, setCount } = useContext(contextprovider);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='flex justify-around fixed top-0 left-0 right-0 z-100 items-center h-[10vh] min-w-[100vw] pt-2 shadow-md border-b-2 rounded-b-2xl border-amber-500 bg-white py-4 mb-5 sm:text-xl'
    >
      {/* باقي الكود زي ما كتبته بالضبط */}
      <div>
        <div className='flex gap-2 items-center justify-center'>
          <img src={logo} alt="logo" className='w-16 h-16 sm:w-12 sm:h-12 min-[100px]:hidden sm:block' />
          <h1 className='text-xl font-bold text-center text-gray-500 hover:text-red-500 sm:text-xl min-[100px]:hidden sm:block uppercase'>shopper</h1>
        </div>
      </div>
      <div className='flex gap-5'>
        <ul className='flex gap-5'>
          <li className='flex flex-col'>
            <Link to="/" className='text-xl block font-bold hover:text-red-500 sm:text-xl' onClick={() => setMenu("shop")}> shop </Link>
            {menu === "shop" ? <hr className='w-[80%] h-[3px] bg-amber-500 rounded-2xl my-1' style={{ border: "none" }} /> : <></>}
          </li>
          <li className='flex flex-col'>
            <Link to="/mens" className='text-xl block font-bold hover:text-red-500 sm:text-xl' onClick={() => setMenu("men")}> men </Link>
            {menu === "men" ? <hr className='w-[80%] h-[3px] bg-amber-500 rounded-2xl my-1' style={{ border: "none" }} /> : <></>}
          </li>
          <li className='flex flex-col'>
            <Link to="/womens" className='text-xl block font-bold hover:text-red-500 sm:text-xl' onClick={() => setMenu("women")}> women </Link>
            {menu === "women" ? <hr className='w-[80%] h-[3px] bg-amber-500 rounded-2xl my-1' style={{ border: "none" }} /> : <></>}
          </li>
          <li className='flex flex-col'>
            <Link to="/kids" className='text-xl block font-bold hover:text-red-500 sm:text-xl' onClick={() => setMenu("kids")}> kids </Link>
            {menu === "kids" ? <hr className='w-[80%] h-[3px] bg-amber-500 rounded-2xl my-1' style={{ border: "none" }} /> : <></>}
          </li>
        </ul>
      </div>
      <div className='flex gap-5 justify-center items-center'>
        <Link to="/loginsignup">
          <button className='text-xl font-bold text-amber-800 hover:text-red-500 rounded-2xl px-5 border-2 border-amber-500 sm:text-xl min-[100px]:border-0 min-[100px]:px-2'>login</button>
        </Link>
        <Link to="/cart">
          <div className='flex gap-5 relative'>
            <img src={cart_icon} alt="cart" className='sm:w-10 sm:h-10 p-1 min-[100px]:w-8 min-[100px]:h-8' />
            <p className='text-xl font-bold hover:text-red-500 text-center z-10 text-white absolute top-0 right-[-10px] w-5 h-5 bg-red-500 rounded-full flex items-center justify-center'>{count}</p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Nav_bar;