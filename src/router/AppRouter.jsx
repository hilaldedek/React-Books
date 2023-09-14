import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Detail from './Detail/Detail'

const AppRouter = () => {
  return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
    
  )
}

export default AppRouter