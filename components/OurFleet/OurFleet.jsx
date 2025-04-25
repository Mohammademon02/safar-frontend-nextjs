'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const OurFleet = () => {
    return (
        <section className="relative pt-12 pb-20">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-black)]">Our Fleet</h2>
                    <div className="flex space-x-4">
                        <button className="swiper-button-prev-custom p-2 rounded-full border border-[var(--secondary)] hover:bg-[var(--secondary)] text-[var(--secondary)] hover:text-white transition cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="swiper-button-next-custom p-2 rounded-full border border-[var(--secondary)] hover:bg-[var(--secondary)] text-[var(--secondary)] hover:text-white transition cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="group overflow-hidden rounded-lg">
                                <Image
                                    src='/images/our-fleet-image.png'
                                    alt='Fleet vehicle image'
                                    width={526}
                                    height={494}
                                    className="w-full object-cover transition duration-500 ease-in-out group-hover:scale-110 rounded-[12px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurFleet;