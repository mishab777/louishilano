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
import Signupcustomer from './auth/Signupcustomer'
import Otp from './auth/Otp'
function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/detailpage' element={<Detailpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/signupcustomer' element={<Signupcustomer/>}/>
      <Route path='/otp' element={<Otp/>}/>

    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>

  )
}

export default App
