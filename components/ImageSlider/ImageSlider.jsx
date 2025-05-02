'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { AboutUsSlider } from '@/data/AboutUsSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);


    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <div className="relative w-full h-[600px]">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                className="w-full h-full"
            >
                {AboutUsSlider.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.backgroundImage}
                                alt={`Car showroom - ${slide.caption.title}`}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="container mx-auto h-full relative">
                    <button
                        ref={navigationPrevRef}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blur bg-opacity-16 backdrop-blur-lg  border border-[#FFFFFF80] pointer-events-auto cursor-pointer transition-all"
                        aria-label="Previous slide"
                    >
                        <IoChevronBackSharp className='text-white' />
                    </button>
                    <button
                        ref={navigationNextRef}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blur bg-opacity-16 backdrop-blur-lg border border-[#FFFFFF80] pointer-events-auto cursor-pointer transition-all"
                        aria-label="Next slide"
                    >
                        <IoChevronForwardSharp className='text-white' />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="bg-blur bg-opacity-16 backdrop-blur-lg w-full max-w-4xl mx-auto px-6 py-3 text-center mb-8 h-28 flex flex-col justify-center border border-[#FFFFFF80] rounded-[12px] transition-opacity duration-300">
                    <h2 className="text-white text-2xl font-semibold">
                        {AboutUsSlider[activeSlide].caption.title}
                    </h2>
                    <p className="text-white text-sm mt-2">
                        {AboutUsSlider[activeSlide].caption.description}
                    </p>

                    {/* Interactive pagination dots */}
                    <div className="flex items-center justify-center mt-4 pointer-events-auto">
                        {AboutUsSlider.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`inline-block h-3 w-3 aspect-square rounded-full mx-1 transition-all duration-300 ease-in-out cursor-pointer ${index === activeSlide ? 'w-8 bg-[var(--primary)]' : 'w-3 bg-white'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImageSlider;