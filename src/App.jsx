import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Color from './pages/Color';
import Tipografia from './pages/Tipografia';
import Nosotros from './pages/Nostros';
import Ayuda from './pages/Ayuda';
import Navbar from './components/Navbar';
import ContrastRatio from './pages/ContrastRatio';
import ColorChecker from './pages/Checker';
import Header from './components/Header';


function App() {
  return (
    <div className="principal">
    <BrowserRouter>

      <div className="navbar">
      <Navbar />
      </div>
    
      <Header/>

      <div className="main-page">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/color' element={<Color />}/>
        <Route path='/tipografia' element={<Tipografia />}/>

        <Route path='/contrastRatio' element={<ContrastRatio/>}/>
        <Route path='/colorChecker' element={<ColorChecker/>}/>
        
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/ayuda' element={<Ayuda />}/>
      </Routes>
      </div>
    
    </BrowserRouter>
    </div>
  )
}

export default App
