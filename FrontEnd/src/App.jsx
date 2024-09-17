import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import Sell from './Pages/Sell'
import Cart from './Pages/Cart'
import Buy from "./Pages/Buy";
import LoginSignup from './components/LoginSignup/LoginSignup'
import Product from './Pages/Product'

function App() {
const[showLogin,setShowLogin]=useState(false)

  return (
    <div className="container ">
      {showLogin?<LoginSignup setShowLogin={setShowLogin} />:<></> }
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/buy/:productId' element={<Product/> } />
        <Route path='/sell' element={<Sell />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
