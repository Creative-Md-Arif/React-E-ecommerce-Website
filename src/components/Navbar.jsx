/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import { Link } from 'react-router-dom';
import logo from "/logo.png"


const Navbar = () => {

 const [isMenuOpen , setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
 }


 const navItems = [
    {title: "Jewelry & Accessories", path:"/"},
    {title: "Clothing & Shoes", path:"/"},
    {title: "Home & Living", path:"/"},
    {title: "Wedding & Party", path:"/"},
    {title: "Toys & Entertainment", path:"/"},
    {title: "Art & Collectibles", path:"/"},
    {title: "Craft Supplies & Tools", path:"/"},
    
 ]

  return (
    <header className='container px-4 '>
        <nav className='flex justify-between items-center md:py-4 pt-6 pb-3'>
        <FaSearch className=' text-Black w-5 h-5 cursor-pointer hidden md:block'/>

        {/* logo  */}
        <Link to="" ><img src={logo} alt="" /></Link>

        {/* account and shopping btn */}
       <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
        <Link to="/" className='flex items-center gap-2'><FaRegUser /> Account</Link>
        <Link to="/" className='flex items-center gap-2'><FaShoppingBag /> Account</Link>
       </div>

       {/* navbar for sm devices */}
        <div className='sm:hidden'>
            <button onClick={toggleMenu}>

            {
              isMenuOpen ? <IoClose className='w-5 h-5 text-Black' /> : <HiMiniBars3BottomLeft className='w-5 h-5 text-Black' /> 
            }

            </button>
        </div>

        </nav>

        <hr />

        {/* category items */}
        <div className='pt-4'>
            <ul className='lg:flex items-center justify-between text-Black hidden'>
                {
                     navItems.map(({title , path}) =>(
                        <li key={title} className='hover:text-red-800 transition-all duration-500'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>

        {/*  only mobile menu items */}

        <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"} `}>
                {
                     navItems.map(({title , path}) =>(
                        <li key={title} className='hover:text-red-800 transition-all duration-500 my-3 cursor-pointer '>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>


    </header>
  )
}

export default Navbar