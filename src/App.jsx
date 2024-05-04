// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <div>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default App
