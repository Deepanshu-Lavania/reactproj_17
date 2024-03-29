import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar'
import Footer from './Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/service' element={<Service/>} />
      <Route path='*' element={<Navigate to="/home" />} />
    </Routes>
    <Footer/>
    </>
  )
}
