/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'


const Cards = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-col-2 grid-cols-1 items-center justify-center gap-12 shadow-sm'>
        {
            filteredItems.map((item) => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {/* image hover  */}
                           <div className=' h-fit group'>
                             <div className=' relative overflow-hidden'>
                               <img  src={item.image}  alt="card.png" className='w-full' />
                                <div className='cardsImage'>
                                 <Link to="/"className='textSale'>
                                  Sale
                                  </Link>    
                                </div>
                             </div>                     
                           </div>
                        {/* image hover end */}
                    </Link>
                    <div className='mt-4 px-4'>
                      <h4 className=' text-base font-semibold mb-2'>{item.title}</h4>

                      <div className='flex justify-between'>
                        <p className='text-black/50'>{item.category}</p>
                        <p className='font-semibold'>${item.price}</p>
                      </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards