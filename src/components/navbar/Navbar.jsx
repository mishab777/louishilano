import React from 'react'
import "./Navbar.css" 
import logo from "./lh-logo-2.png"
import {Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
  <>
  <div className='flex flex-row p-3 md:justify-evenly justify-between items-center h-20'>
    <div className='flex items-center justify-center gap-2'>
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
  </>
  )
}

export default Navbar