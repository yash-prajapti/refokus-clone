import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Work from '../Components/Work/Work'
import About from '../Components/About/About'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Routing