import React, { useState } from 'react'
import "./Navbar.css" 
import logo from "./lh-logo-2.png"
import {Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";



const Navbar = () => {

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
  <>
  <div className='flex flex-row p-3 md:justify-evenly justify-between items-center h-20'>
    <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={toggleOffCanvas}>
    <GrMenu size={20}/>
    <span>MENU</span>
    </div>
    <div className='flex items-center justify-center h-full'>
      <img src={logo} alt="" className='h-full object-contain w-auto'/>
    </div>
    <div className='md:flex flex-row hidden items-center gap-4'>
      <Link className='link'><IoPersonOutline size={22}/></Link>
      <button><FiSearch size={22}/></button>
      <button><AiOutlineShopping size={24}/></button>
    </div>
  </div>
  <div 
        className={`fixed top-0 left-0 w-80 md:w-96 h-full bg-white z-50 border-r border-gray-300 p-4 transform ${
          isOffCanvasOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button 
          onClick={toggleOffCanvas} 
          className="absolute top-4 right-4 border-0"
        >
          <IoCloseCircle size={25}/>
        </button>
        <nav className="mt-8">
          <img src={logo} className='w-auto h-14 object-contain mb-4' alt="" />
          <ul className="space-y-4">
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>Perfumes</Link></li>
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>Bags</Link></li>
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>Wallets</Link></li>
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>Sandals</Link></li>
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>Watches</Link></li>
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>About us</Link></li>
            <li className='text-black text-xl'><Link to="/" onClick={toggleOffCanvas}>Contact us</Link></li>
          </ul>
        </nav>
      </div>
  </>
  )
}

export default Navbar