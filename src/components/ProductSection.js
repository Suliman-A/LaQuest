import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import products from '../assets/data/products'
import ProductItem from './ProductItem'
import 'swiper/css';
import 'swiper/css/navigation';

import './ProductSection.css'

// install Swiper modules
SwiperCore.use([Navigation]);

function ProductSection() {
    return (
        <div className='container products'>
            <div className='services-header'>      
                    <h4>PROSUCTS</h4>
                    <h2>SIMPLIFIED SOLUTIONS AT
                        <br/>
                        YOUR FINGERTIPS.</h2>
                    <p>Building systems from ground up.</p>
        </div>
            <div className='products-allItems'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {products.map((product, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={product.id}>
                  <ProductItem
                    title={product.name}
                    img={product.img}
                    desc={product.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
            </div>
        </div>
)
}
export default ProductSection
