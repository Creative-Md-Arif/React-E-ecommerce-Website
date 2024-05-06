/* eslint-disable no-undef */
import React from 'react'
import { Link } from 'react-router-dom'


const Newsletters = () => {
  return (
    <section className='bg-[#1E2832] bg-opacity-5 px-4 py-16'>
        <div className='container'>
          <div>
          <h2 className='title mb-8'>Follow products and discounts on Instagram</h2>

              {/* insta grid */}

              <div className='flex flex-wrap gap-4 items-center justify-center mb-20 mx-auto '>
                  <Link to="/">
                      <img src="/newslatters/card.png" alt="" />
                  </Link>
                  <Link to="/">
                      <img src="/newslatters/05.png" alt="" />
                  </Link>
                  <Link to="/">
                      <img src="/newslatters/07.png" alt="" />
                  </Link>
                  <Link to="/">
                      <img src="/newslatters/08.png" alt="" />
                  </Link>
                  <Link to="/">
                      <img src="/newslatters/09.png" alt="" />
                  </Link>
                  <Link to="/">
                      <img src="/newslatters/10.png" alt="" />
                  </Link>
              </div>

          </div>
          <div>
            <h2 className='title'>Or subscribe to the newsletter</h2>
            <div className='flex flex-col md:w-1/2 md:flex-row mx-auto text-center'>
                <input type="email" name='email' id='email' placeholder='Email address...'className='h-8 bg-transparent outline-none border-2 pl-2 border-black md:2/3 w-full mb-5 placeholder:text-black/50 mr-4' />
                <input type="submit" value={"Submit"} className='bg-black text-white px-6 py-1 h-8 rounded-sm' />
            </div>
          </div>
        </div>

    </section>
  )
}

export default Newsletters