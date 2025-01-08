import { useState } from 'react'
import './App.css'
import {Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Product from './pages/Product'
import Detailpage from './pages/Detailpage'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Dashboard from './Admin/Dashboard'
import SidebarNavbar from './pages/AdminPages/SidebarNavbar'
import AdminHome from './pages/AdminPages/AdminHome'
import AdminBaseLayout from './pages/Layout/AdminBaseLayout'
import ProductAdd from './pages/AdminPages/ProductAdd'
import ProductList from './pages/AdminPages/ProductList'

function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route element={<AdminBaseLayout/>}>
        <Route path='/admin_home' element={<AdminHome/>}/>
        <Route path='/product_Add' element={<ProductAdd mode='add'/>}/>
        <Route path='/product_Edit/:id' element={<ProductAdd mode='edit'/>}/>
        <Route path='/product_list' element={<ProductList/>}/>
      </Route>

      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/detailpage' element={<Detailpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admin' element={<Dashboard/>}/>
      
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>

  )
}

export default App
