'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { testimonialsData } from '@/utlits/fackData/testimonialsData';
import SlideUp from '@/utlits/animations/slideUp';
import Image from 'next/image';


const Testimonials = () => {
    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Testinomials</p>
                                    <h2>What clients say!</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <Swiper
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    767: {
                                        slidesPerView: 2,
                                    }
                                }}
                                spaceBetween={40}
                                loop={true}
                                navigation={
                                    {
                                        nextEl: ".testimonial-next",
                                        prevEl: ".testimonial-prev"
                                    }
                                }
                                modules={[Navigation]}
                            >
                                {testimonialsData.map(({ id, name, position, review, src }) => <SwiperSlide key={id} > <Card img={src} name={name} position={position} review={review} /> </SwiperSlide>)}
                            </Swiper>
                            <SlideUp>
                                <div className="slider-arrows text-center pt-40">
                                    <button className="testimonial-prev arrow">
                                        <RiArrowLeftSLine />
                                    </button>
                                    <button className="testimonial-next arrow">
                                        <RiArrowRightSLine />
                                    </button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials


const Card = ({ img, name, position, review }) => {
    return (
        <SlideUp>
            <div className="testimonial-item">
                <div className="author">
                    <Image 
                        width={60} 
                        height={60} 
                        sizes="60px"
                        src={img} 
                        alt={`${name} - ${position}`}
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                </div>
                <div className="text">{review}</div>
                <div className="testi-des">
                    <h5>{name}</h5>
                    <span>{position}</span>
                </div>
            </div>
        </SlideUp>
    )
}
