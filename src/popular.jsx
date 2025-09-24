import React from 'react'
import data from './assets/data.js'
import Items from './Items'
const Popular = () => {
  return (
    <div>
        <h2 className='text-center text-2xl font-bold mt-10 mb-5 text-gray-800 hover:text-emerald-700'>Popular in women</h2>
     <hr className='w-[80%] mx-auto decoration-2 decoration-gray-800 dotted'/>   <Items data={data}/>
    </div>
  )
}

export default Popular