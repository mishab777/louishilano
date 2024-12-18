import React from 'react'
import logo from "./navbar/lh-logo-1.png"

const Footer = () => {
  return (
    <div className="w-full pt-8 min-h-screen flex items-center justify-center bg-black">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-3xl md:text-6xl font-bold">
                <h1 className="w-full font-normal md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                <div className="w-44 pt-4 md:pt-0">
                    <a className="bg-neutral-400 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 md:flex-row items-center flex-col justify-between">
                    <div className="">
                        <img src={logo} alt="" className='h-12 mb-2'/>    
                    </div>
                    <div className='flex items-center w-3/4 md:flex-row flex-col gap-2 justify-between'>
                    <a className=" md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</a>
                    <a className=" md:block cursor-pointer text-gray-600 hover:text-white uppercase">Products</a>
                    <a className=" md:block cursor-pointer text-gray-600 hover:text-white uppercase">Services</a>
                    <a className=" md:block cursor-pointer text-gray-600 hover:text-white uppercase">Why us</a>
                    <a className=" md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2024 Louis Hilano</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
