import React from 'react'

const Loginsignup = () => {
  return (
    <div className='w-full h-full fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center  my-10 mx-auto ' style={{background:"#fce3fe"}}>
      <div className='w-[75%] h-[auto] bg-white rounded-2xl px-2 py-10 lg:w-[40%]'>
        <h1 className='text-2xl font-bold text-center text-gray-500 hover:text-red-500 sm:text-xl mb-4 '>sign up</h1>
        <form action="" className='flex flex-col gap-5 max-w-[500px] mx-auto'>
          <input type="text" placeholder='username' className='p-2 w-full h-10 rounded-2xl border-2 border-amber-500 max-w-[500px]'/>
          <input type="email" placeholder='email' className='p-2 w-full h-10 rounded-2xl border-2 border-amber-500 max-w-[500px]'/>
          <input type="password" placeholder='password' className='p-2 w-full h-10 rounded-2xl border-2 border-amber-500 max-w-[500px]'/>
          <button className='w-full h-10 rounded-2xl border-2 border-amber-500 bg-amber-500 hover:bg-amber-600 hover:text-white max-w-[500px]'>continue</button>
          <p>already have an account? <a href="" className='text-red-500 hover:text-red-600 hover:underline'>login here</a></p>
     <p>     <input type="checkbox" /> by signing up you agree to our <a href="" className='text-red-500 hover:text-red-600 hover:underline'>terms and conditions</a></p>
        </form>
      </div>
      
      
    </div>
  )
}

export default Loginsignup