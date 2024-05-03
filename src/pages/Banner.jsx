/* eslint-disable no-unused-vars */
import React from 'react'
import bannerImg from "/banner-image.png"
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='bg-primaryBG py-12'>
       <div className='container py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14 px-2'>
        {/* banner img  */}
         <div>
            <img src={bannerImg} alt="" />
         </div>
           {/* banner img end  */}
           {/* banner text */}
         <div className='md:w-1/2'>
            <h1 className='text-5xl font-light mb-5'>Collections</h1>
            <p className='text-xl mb-7'>you can explore ans shop many differnt collection
             from various brands here.</p>
             {/* button */}
             <div className='pt-5'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <button className="relative flex items-center gap-2 group-hover:text-white "><FaBagShopping />shop now</button>
                 </Link>
                </div>
                {/* button end */}
         </div>
         {/* banner text end */}
       </div>
    </div>
  )
}

export default Banner