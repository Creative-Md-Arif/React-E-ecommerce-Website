// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


const Collection = () => {
  return (
    <section className='bg-[url("/public/collection/brand-banner.png")] bg-cover bg-center bg-no-repeat px-4 my-20 '>
        <div className='h-[580px] flex justify-between md:flex-row items-center'>
            <div className='md:w-1/2'></div>
            <div className='md:w-1/2'>
                <img src="/public/1024px-Zara_Logo 2.png" alt="" />
                <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.   </p>
                 {/* button */}
                <div className='py-5'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <button className="relative flex items-center gap-2 group-hover:text-white ">See Collection</button>
                 </Link>
                </div>
                {/* button end */}
            </div>


        </div>
    </section>
  )
}

export default Collection