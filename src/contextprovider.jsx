import React, { createContext, useState } from 'react'

export const contextprovider = createContext(null)
import all_products from "./assets/all_product.js";
const defaultvalue=()=>{
    let cart={}
    for(let i=0;i<all_products.length;i++){
        cart[i]=0
    }
    return cart;
}
const ContextProvider = ({ children }) => {
  let [sizeshowen,setSizeshowen]=useState({})
 const [cartitems,setCartitems]=useState(defaultvalue())
 const [count,setCount]=useState(0)
 const addtoCart=(id,size)=>{
    setCartitems({...cartitems,[id]:cartitems[id]+1})
    setCount(count+1)
    setSizeshowen(prev=>({...prev,[id]:size}))
    console.log(cartitems)
  }
  const removefromCart=(id)=>{
    setCartitems({...cartitems,[id]:cartitems[id]-1})
    setCount(count-1)
    
  
  }
  const clearCart=()=>{
    setCartitems(defaultvalue())
    setCount(0)
  }
  return (
    <contextprovider.Provider value={{ all_products,addtoCart,removefromCart,clearCart,cartitems ,count,setCount ,sizeshowen }}>
      {children}
    </contextprovider.Provider>
  )
}

export default ContextProvider