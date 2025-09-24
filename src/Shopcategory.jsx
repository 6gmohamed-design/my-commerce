import React,{useState} from 'react'
import { contextprovider } from './contextprovider'
import { useContext } from 'react'
import  dropdown_icon from './assets/dropdown_icon.png'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
const Shopcategory = ({category,banner}) => {
  
    const {all_products,addtoCart,removefromCart,clearCart,cartitems} = useContext(contextprovider)
    let [count,setCount]=useState(0)
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 ,y:0 ,scale:1.1 ,rotateX:10 }} exit={{opacity:0}} transition={{duration:1}} className='max-w-[80%] h-full  my-10 py-10 mx-auto min-h-[100vh]'>
    <div className='max-w-[80%] h-full  my-10 py-10 mx-auto min-h-[100vh]'>
      <div className="my-10">
 <img src={banner} alt="" className='w-full h-full object-contain rounded-2xl mb-10 hover:scale-110 transition-all duration-300' />
 <div className='flex justify-between items-center my-10'>
 <p className='font-bold text-blue-600  text-lg '>showing1-12 of 36 {category}</p>
 <span className='cursor-pointer hover:scale-110 transition-all duration-300 flex items-center gap-2 border border-gray-400 p-2 rounded-2xl'>
 sort by<img src={dropdown_icon} alt="" />
 </span>
 </div>
 </div>
 <div className='flex flex-wrap gap-4 h-full justify-center items-center'>
   {all_products.filter((product)=>{
    return product.category === category
   }).map((product)=>{
    return(
        <div key={product.id} className='max-w-[200px] rounded-2xl my-2 hover:scale-110 transition-all duration-300  '>
         <Link to={`/product/${product.id}`}>   <img src={product.image} alt="" className='w-full h-full rounded-2xl object-contain' /></Link>
            <h2 className='h-full' > <span className='font-bold font-stretch-expanded leading-1text-lg'>Name:</span>{product.name}</h2>
            <p className='h-full' > <span className='font-bold font-stretch-expanded leading-1 text-lg'>Price:</span> <span className='font-bold text-red-500'>{product.new_price}</span> <span className='line-through text-gray-500' >{product.old_price}</span></p>
            <button className='bg-black text-white p-2 rounded-2xl   hover:bg-red-800 hover:text-white transition-all duration-300' onClick={()=>{addtoCart(product.id);setCount(count+1)}}>Add to Cart</button>
        </div>
    )
   })}
</div>    
    </div>
    </motion.div>
  )
}

export default Shopcategory