import { useState } from 'react'
import './App.css'
import {Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
