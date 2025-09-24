import React from 'react';
import exclusive from './assets/exclusive_image.png';
import { motion } from 'framer-motion';

const Offers = () => {
  return (
    <div
      className='mx-auto py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-xl shadow-lg max-w-[80%]'
      style={{ background: 'linear-gradient(180deg,#fde1ff,#e1ffea22 60%)' }}
    >
      {/* النص */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col gap-4 text-center lg:text-left'
      >
        <h1 className='text-3xl lg:text-5xl font-extrabold text-gray-800'>Exclusive Offers</h1>
        <h2 className='text-2xl lg:text-4xl font-bold text-red-500'>New offer for you</h2>
        <p className='text-xl lg:text-2xl font-medium text-cyan-800'>
          Only on best seller products
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-red-600 transition-all duration-300'
        >
          Check Now
        </motion.button>
      </motion.div>

      {/* الصورة */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='w-full lg:w-[50%]'
      >
        <img
          src={exclusive}
          alt='Exclusive Offer'
          className='w-full h-auto object-cover rounded-xl shadow-md'
        />
      </motion.div>
    </div>
  );
};

export default Offers;