import React from 'react';
import { motion } from 'framer-motion';

const Items = ({ data }) => {
  return (
    <div className='container-fluid max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 mb-20 pb-20'>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4'
        >
          <img
            src={item.image}
            alt={item.name}
            className='w-full h-full object-contain rounded-lg mb-4'
          />
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>{item.name}</h2>
          <div className='flex gap-3 items-center'>
            <p className='text-emerald-700 font-bold text-lg'>{item.new_price}$</p>
            <p className='line-through text-fuchsia-800 text-md'>{item.old_price}$</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Items;