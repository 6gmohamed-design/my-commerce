import React from 'react'
import Hero from './Hero'
import Popular from './popular'
import Offers from './Offers'
import Collection from './Collection'
import Newsletter from './Newsletter'
 
const Shop = () => {
  return (
    <div className='min-h-[100vh] my-10 py-10'>
        <Hero />
        <Popular />
        <Offers />
          <Collection />
          <Newsletter />
         
    </div>
  )
}

export default Shop