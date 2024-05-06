// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


const brandLogo = [
    {id: 1, img: "/Brand-Logo/01.png"},
    {id: 2, img: "/Brand-Logo/02.png"},
    {id: 3, img: "/Brand-Logo/03.png"},
    {id: 4, img: "/Brand-Logo/04.png"},
    {id: 5, img: "/Brand-Logo/05.png"},
]

const Category = () => {
  return (
    <section>
        <div className='container px-4 py-28'>
         {/* Brand Logo  */}
          <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
            {
                brandLogo.map(({id, img}) =>(
                  <div key={id}><img src={img} alt="" /></div>
                ))
            }
          </div>
          {/* Category Grid */}
          <div className=' relative mt-8 flex flex-col md:flex-row items-center gap-4'>
            <p className='font-semibold uppercase md:-rotate-90 text-center text-[20px] md:absolute top-1/2 -left-[200px] text-[#000000] md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
            <div className='md:w-1/2'>
               <div className=' h-fit group'>
                  <div className=' relative overflow-hidden'>
                     <img  src="/CategoryImage/card.png"  alt="card.png" className='w-full' />
                     <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0  
                         group-hover:opacity-100 transition-all duration-300 '>
                       {/* <Link to="/"className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'></Link>     */}
                     </div>
                 </div>                     
               </div>
                {/* <Link to="/"><img src="/public/CategoryImage/card.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link> */}
            </div>
            <div className='md:w-1/2'>
                <div className=' grid grid-cols-2 gap-2'>
                   {/* image one */}
                   <div className=' h-fit group'>
                     <div className=' relative overflow-hidden'>
                     <img  src="/CategoryImage/02.png" alt="" className='w-full' />
                      <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0  
                         group-hover:opacity-100 transition-all duration-300 '>
                        {/* <Link to="/"className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'>Sale</Link>     */}
                      </div>
                   </div>                     
               </div>
               {/* image two */}
               <div className=' h-fit group'>
                     <div className=' relative overflow-hidden'>
                     <img  src="/CategoryImage/03.png" className='w-full' alt="" />
                      <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0  
                         group-hover:opacity-100 transition-all duration-300 '>
                        {/* <Link to="/"className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'>Sale</Link>     */}
                      </div>
                   </div>                     
               </div>
               {/* image three */}
               <div className=' h-fit group'>
                     <div className=' relative overflow-hidden'>
                     <img  src="/CategoryImage/item-category-hover 1.png" alt="" className='w-full' />
                      <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0  
                         group-hover:opacity-100 transition-all duration-300 '>
                        {/* <Link to="/"className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'>Sale</Link>     */}
                      </div>
                   </div>                     
               </div>
               {/* image four */}
               <div className=' h-fit group'>
                     <div className=' relative overflow-hidden'>
                     <img  src="/CategoryImage/item-category.png" alt="" className='w-full' />
                      <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0  
                         group-hover:opacity-100 transition-all duration-300 '>
                        {/* <Link to="/"className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'>Sale</Link>     */}
                      </div>
                   </div>                     
               </div>
                </div>
            </div>
            

          </div>

        </div>
    </section>
  )
}

export default Category