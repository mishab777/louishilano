import React from 'react'
import image from "../assets/card-1.jpg"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

const Detailpage = () => {
  return (
    <>
    <Navbar/>
    <div className="container p-5">
        <div className='flex flex-row items-center'>
            <a href="" className='text-xs text-gray-500 mb-3'>Home / Perfumes / Enchanté Nior</a>
        </div>
        <div className="grid grid-cols-2 gap-5">
            <div className='w-full'>
                <img src={image} alt="" className='w-full h-full object-contain'/>
            </div>
            <div className='flex flex-col items-start justify-start p-5 gap-2'>
              <h3 className='text-2xl'>Celestial Elegance</h3>
              <h5 className='font-light text-xl text-gray-500'>د.إ100.00 – د.إ150.00</h5>
              <h3 className='text-xl'>Volume</h3>
              <div className='flex flex-row gap-4'>
              <button className='border-b-2 text-gray-500 border-gray-500'>50 ML</button>
              <button className='border-b-2 text-gray-500 border-gray-500'>80 ML</button>
              </div>
              <button className='bg-black hover:bg-slate-600 mt-2 mb-2 font-light text-white p-4 w-full'>ORDER NOW</button>
              <p className='text-gray-500 text-sm font-light'>Experience the timeless allure of our signature perfume, blending fresh citrus and floral notes with a warm, woody base. Perfect for any occasion, this elegant fragrance leaves a lasting impression, reflecting sophistication and individuality. Encased in a sleek, modern bottle, it’s more than a scent—it’s a statement of style.</p>
              <div className='flex flex-col items-start justify-start p-5 gap-2'>

              </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Detailpage