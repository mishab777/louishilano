import React from 'react'

const Adminlogin = () => {
  return (
    <>
    <div className='container h-screen'>
        <form className='w-full h-screen flex flex-col items-center'>
            <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
            <h1 className='text-center text-3xl text-black mb-4'>Login</h1>
            <input type="text" name="username" id="name" autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='username'/>
            <input type="text" name="password" id="name" autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='password'/>
            <button type='submit' className='bg-black w-full rounded text-white p-2'>Log In</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Adminlogin