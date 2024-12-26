import React from 'react'
import perfume from "../assets/perfume-min.jpg"
import { FaAngleDown } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';





const Product = () => {
  return (
    <>
    <Navbar/>
        <div className="flex flex-col md:flex-row md:h-screen h-80 justify-center items-center bg-black">
  <h3 className='md:text-6xl text-3xl h-auto text-center mx-auto text-white tracking-wider font-normal'>Find Your Perfect Match <br /><h1 className='text-yellow-500'> in Style</h1></h3>
    </div>  
    <div className="container p-5">
      <div className='flex md:flex-row flex-col justify-between items-center'>
        <div className='flex items-start justify-center'>
          <a href="" className='text-sm'>Home/All Products</a>
        </div>
        <div className='flex items-center justify-center flex-row gap-2'>
          <button className='text-xs border-0 flex flex-row items-center uppercase'>Category<FaAngleDown/></button>
          <button className='text-xs border-0 flex flex-row items-center uppercase'>Sort By<FaAngleDown/></button>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-1 gap-5 p-5">
  <Link to='/detailpage'><div className='flex w-full border cursor-pointer relative'>
    <img src={perfume} alt="" className='w-full h-80 object-cover relative'/>
    <IoIosHeartEmpty className='absolute top-3 right-3' size={20}/>
  </div></Link>
  <div className='flex w-full border cursor-pointer relative'>
    <img src={perfume} alt="" className='w-full h-80 object-cover relative'/>
    <IoIosHeartEmpty className='absolute top-3 right-3' size={20}/>
  </div>
  <div className='flex w-full border cursor-pointer relative'>
    <img src={perfume} alt="" className='w-full h-80 object-cover relative'/>
    <IoIosHeartEmpty className='absolute top-3 right-3' size={20}/>
  </div>
  <div className='flex w-full border cursor-pointer relative'>
    <img src={perfume} alt="" className='w-full h-80 object-cover relative'/>
    <IoIosHeartEmpty className='absolute top-3 right-3' size={20}/>
  </div>
</div>
<Footer/>
    </>
  )
}

export default Product
