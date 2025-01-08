import React, { useState } from 'react'
import "./Navbar.css" 
import logo from "./lh-logo-2.png"
import {Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";




const Navbar = () => {

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isSearchopen, SetSearch] = useState(false);
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);
  const [isLeatheropen, setLeatheropen] = useState(false);


  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const toggleSearch = () =>{
    SetSearch(!isSearchopen);
  }

  return (
  <>
  <div className='flex flex-row p-3 md:justify-evenly justify-between items-center h-20'>
    <div className='flex md:hidden items-center justify-center gap-2 cursor-pointer' onClick={toggleOffCanvas}>
    <GrMenu size={20}/>
    <span>MENU</span>
    </div>
    <div className='md:flex hidden'>
      <span>LOGIN</span>
    </div>
    <div className='flex items-center justify-center h-full'>
      <img src={logo} alt="" className='h-full object-contain w-auto'/>
    </div>
    <div className='md:flex flex-row hidden items-center gap-4'>
      <button onClick={toggleSearch}><FiSearch size={22}/></button>
      <button><AiOutlineShopping size={24}/></button>
    </div>
  </div>
  <div 
        className={`fixed md:hidden flex top-0 left-0 w-80 md:w-96 h-full bg-white z-50 border-r border-gray-300 p-4 transform ${
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
        <div className='flex w-full md:hidden flex-row gap-2 items-start p-2 justify-start'>
          <Link className='link'><IoPersonOutline size={22}/></Link>
      <button><AiOutlineShopping size={24}/></button>
          </div>
          <ul className="space-y-4 mt-3">
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
      <div className={`fixed top-0 left-2/4 w-80 md:w-96 h-20 bg-white z-50 p-4 transform ${
          isSearchopen ? 'translate-y-20' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}>
        <form className='w-full h-full flex flex-row items-center justify-end'>
          <IoSearchCircle size={30}/>
          <input type="search" name="search" id="search-bar" className='w-full border-b text-xs outline-none border-gray-300 p-2 text-gray-500' placeholder='What are you looking for?' />
          <div 
          onClick={toggleSearch} 
          className="border-0 cursor-pointer"
        >
          <IoCloseCircle size={20}/>
        </div>
        </form>
      </div>
      <div className='hidden md:flex flex-row items-center py-2 justify-center gap-5'>
        <div className='relative' onMouseEnter={() => setMenDropdownOpen(true)}
          onMouseLeave={() => setMenDropdownOpen(false)}>
        <a href="" className='font-light flex flex-row items-center'>MEN<MdOutlineKeyboardArrowDown/></a>
          {isMenDropdownOpen && (
            <div className='absolute bg-white w-auto h-auto'>
              <div className='w-full flex flex-col items-start justify-center gap-2 p-3'>
                <a href="" className='text-sm'>CLASSIC COLLECIONS</a>
                <a href="" className='text-sm'>SANDALS FOR MEN</a>
                <a href="" className='text-sm'>PERFUME FOR MEN</a>
                <a href="" className='text-sm'>WALLETS FOR MEN</a>
              </div>
            </div>
          )}
          </div>
        <a href="" className='font-light'>KIDS</a>
        <div className='relative' onMouseEnter={() => setLeatheropen(true)}
          onMouseLeave={() => setLeatheropen(false)}>
        <a href="" className='font-light flex flex-row items-center'>LEATHER GOODS<MdOutlineKeyboardArrowDown/></a>
          {isLeatheropen && (
            <div className='absolute bg-white w-auto h-auto'>
              <div className='w-full flex flex-col items-start justify-center gap-2 p-3'>
                <a href="" className='text-sm'>WALLETS</a>
                <a href="" className='text-sm'>BAGS</a>
                <a href="" className='text-sm'>BRACELETS</a>
              </div>
            </div>
          )}
          </div>
        <a href="" className='font-light'>FRAGRANCE</a>
      </div>
  </>
  )
}

export default Navbar