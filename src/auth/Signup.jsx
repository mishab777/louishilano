import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='container'>
      <form className='w-full h-screen flex flex-col items-center'>
            <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
            <h1 className='text-center text-3xl text-black mb-4'>Sign Up</h1>
            <input type="text" name="name" id="name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Name'/>
            <input type="text" name="email" id="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Email'/>
            <input type="text" name="phone" id="phone" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Phone Number'/>
            <input type="text" name="password" id="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Password'/>
            <button type='submit' className='bg-black w-full rounded text-white p-2'>Sign Up</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Signup
