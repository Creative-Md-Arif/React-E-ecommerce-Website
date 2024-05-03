
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const BestSellers = () => {
    const [products , setProducts] = useState([]);
    useEffect( () => {
        fetch("Product.json").then(res => res.json()).then(data => setProducts(data))
    },[]);
    
    const bestSellers = products.filter((item) => item.status === "Best Selers");
    // console.log(bestSellers);
    


    return (
    <section>
        <div className='container px-4 py-10'>
           <div>
            <h2 className='title'>Best sellers</h2>
            <p className=' text-black/75 capitalize text-center md:w-2/3 mx-auto  mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi beatae, quibusdam maiores molestiae sapiente reiciendis fuga pariatur quisquam? Ab accusantium recusandae facere ad illo alias omnis sed.</p>
           </div>

           {/* best seller Product cards */}
           <div>
           <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              }}
              pagination={{
              clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              >
             
              {
                bestSellers.map((product) => (
                    <SwiperSlide key={product.id}>
                         <Link to={`/shop/${product.id}`}>
                        {/* image hover  */}
                           <div className=' h-fit group'>
                             <div className=' relative overflow-hidden'>
                               <img  src={product.image}  alt="card.png" className='w-full' />
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
                      <h4 className=' text-base font-semibold mb-2'>{product.title}</h4>

                      <div className='flex justify-between'>
                        <p className='text-black/50'>{product.category}</p>
                        <p className='font-semibold'>${product.price}</p>
                      </div>
                    </div>
                    </SwiperSlide>
                ))
              }
             
             </Swiper>
           </div>
        </div>
    </section>
  )
}

export default BestSellers