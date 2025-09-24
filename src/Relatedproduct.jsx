import React from 'react';
import data_product from './assets/data';
import { useContext } from 'react';
import { contextprovider } from './contextprovider';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Relatedproduct = () => {
  const { addtoCart } = useContext(contextprovider);

  return (
    <div className='w-full mx-auto my-10 py-10'>
      <p className='text-2xl font-bold text-center mt-10 mb-6 text-[#222] hover:text-[#333] transition-all duration-300 ease-in-out'>
        Related Products
      </p>

      <div className='max-w-[80%] mx-auto md:flex md:justify-center md:gap-4 lg:grid lg:grid-cols-4 gap-6'>
        {data_product.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className='transition-all duration-300 ease-in-out'
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt=""
                className='w-full hover:scale-110 transition-all duration-300 ease-in-out'
                onClick={() => window.scrollTo(0, 0)}
              />
            </Link>
            <h2 className='text-xl font-bold mt-6 mb-2 text-[#222] hover:text-[#333] transition-all duration-300 ease-in-out'>
              {product.name}
            </h2>
            <p className='text-lg font-bold mt-6 mb-2 text-[#222] hover:text-[#333] transition-all duration-300 ease-in-out'>
              {product.price}
            </p>
            <button
              onClick={() => addtoCart(product.id)}
              className='bg-[#222] text-white px-4 py-2 rounded hover:bg-[#333] transition-all duration-300 ease-in-out'
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Relatedproduct;