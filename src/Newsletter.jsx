import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='container-fluid overflow-hidden max-w-[80%] mx-auto py-10 flex justify-center items-center flex-col'
      style={{
        marginTop: '100px',
        background: 'linear-gradient(180deg,#fde1ff,#e1ffea22 60%)',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-5xl font-bold text-gray-800'
      >
        get exclusive offers on your email
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-xl font-bold text-gray-800 mt-5'
      >
        Sign up to our newsletter to receive updates on new arrivals, special offers, and more.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='flex justify-center items-center min-[100px]:flex-col sm:flex-row gap-5 mt-10 w-full'
      >
        <input
          type='email'
          placeholder='Enter your email'
          className='py-2 px-5 rounded-lg outline-amber-300 border-2 lg:w-[40%]'
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-red-500 hover:bg-red-600 transition-all delay-100 py-2 hover:duration-300 ease-in-out hover:text-white rounded flex items-center justify-between hover:shadow-lg hover:shadow-red-500 px-5'
        >
          Subscribe
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Newsletter;