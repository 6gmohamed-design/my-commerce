import React from 'react';
import new_collection from './assets/new_collections.js';
import { motion } from 'framer-motion';

const Collection = () => {
  return (
    <div className='container-fluid flex justify-between flex-wrap gap-1 max-w-[80%] h-full mt-10 mx-auto'>
      {new_collection.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className='overflow-hidden shadow-md p-2 sm:w-[150px] text-center my-2 rounded transition-all lg:w-[400px]'
        >
          <img src={item.image} alt={item.name} className='w-full object-cover rounded' />
          <h2 className='mt-2 text-lg font-semibold'>{item.name}</h2>
          <div className='flex justify-between mt-1'>
            <p className='text-emerald-700 font-bold'>{item.new_price}$</p>
            <p className='line-through text-fuchsia-800'>{item.old_price}$</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Collection;