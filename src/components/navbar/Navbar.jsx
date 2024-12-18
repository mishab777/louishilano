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
  <div className='navbar'>
    <div className="navbar-top">
    <div className='menu'>
    <GrMenu size={20}/>
    <span>MENU</span>
    </div>
    <div className='logo'>
      <img src={logo} alt="" />
    </div>
    <div className='login-search'>
      <Link className='link'><IoPersonOutline size={22}/></Link>
      <button><FiSearch size={22}/></button>
      <button><AiOutlineShopping size={24}/></button>
    </div>
    </div>
    {/* <div className="navbar-bottom">
      <Link className='page-link'><a href="">HOME</a></Link>
      <Link className='page-link'><a href="">PRODUCT</a></Link>
      <Link className='page-link'><a href="">SHOP</a></Link>
      <Link className='page-link'><a href="">BLOG</a></Link>
      <Link className='page-link'><a href="">ABOUT</a></Link>
      <Link className='page-link'><a href="">CONTACT</a></Link>
    </div> */}
  </div>
  </>
  )
}

export default Navbar