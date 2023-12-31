import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/about'
import Userpage from './pages/Userpage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user/:id" element={<Userpage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
