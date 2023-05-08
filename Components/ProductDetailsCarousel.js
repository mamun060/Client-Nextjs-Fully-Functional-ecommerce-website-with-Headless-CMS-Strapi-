/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function ProductDetailsCarousel({images}) {
  return (
    <div className=' text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] '>
        <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
        >
          {
            images?.map((img) => (
              <img 
              key={img.id}
              src={`http://127.0.0.1:1337${img.attributes.url}`}
              alt={img.Product_title} 
              />
            ))
          }
        {/* <img src="/p3.png" alt='' />
        <img src="/p4.png" alt='' />
        <img src="/p5.png" alt='' />
        <img src="/p6.png" alt='' />
        <img src="/p7.png" alt='' /> */}
        </Carousel>
    </div>
  )
}
