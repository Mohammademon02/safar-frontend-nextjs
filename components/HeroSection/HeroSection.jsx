'use client'
import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";


const HeroSection = () => {
    const [date, setDate] = useState("Thu, Oct 06, 2024");
    const [time, setTime] = useState("11 : 20 PM");
    const [from, setFrom] = useState("Uttora, Dhaka");
    const [to, setTo] = useState("Kandirpar, Cumilla");

    return (
        <section className="relative bg-white lg:grid lg:h-screen lg:place-content-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/images/Hero-image.png')",
                    filter: "brightness(0.6)"
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <p className="text-lg md:text-xl font-normal mb-2">Where Would You Like To Go?</p>

                <h1 className="text-5xl md:text-7xl font-bold mb-2">Find The Car</h1>

                <div className="flex flex-wrap justify-center items-center gap-2 mb-8 md:mb-16 text-[var(--primary)] tracking-[2px] sm:tracking-[3px] md:tracking-[4.5px]">
                    <p className="text-sm sm:text-base md:text-lg">Your Destination</p>
                    <span className="text-sm sm:text-base md:text-lg">|</span>
                    <p className="text-sm sm:text-base md:text-lg">Our Dedication</p>
                </div>

                {/* Search Form */}
                <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-5xl bg-white bg-opacity-90 rounded-full hidden lg:flex flex-wrap items-center p-1 md:p-2">
                    {/* Date */}
                    <div className="relative flex items-center bg-white rounded-full px-3 py-2 md:py-2 flex-1 min-w-[200px]">
                        <div className='bg-[var(--primary)] h-[46px] w-[46px] aspect-square flex items-center justify-center rounded-full mr-2'>
                            <FaCalendarAlt className='text-[var(--text-gray)]' size={20} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="date-input" className="text-[var(--text-gray)] opacity-70 text-xs">Date</label>
                            <input
                                id="date-input"
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="text-[var(--text-gray)] font-semibold text-sm bg-transparent focus:outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="relative flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[150px]">
                        <div className='bg-[var(--primary)] h-[46px] w-[46px] aspect-square flex items-center justify-center rounded-full mr-2'>
                            <FaClock className='text-[var(--text-gray)]' size={20} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="time-input" className="text-[var(--text-gray)] opacity-70 text-xs">Time</label>
                            <input
                                id="time-input"
                                type="text"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="text-[var(--text-gray)] font-semibold text-sm bg-transparent focus:outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* From */}
                    <div className="relative flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[180px]">
                        <div className='bg-[var(--primary)] h-[46px] w-[46px] aspect-square flex items-center justify-center rounded-full mr-2'>
                            <FaMapMarkerAlt className='text-[var(--text-gray)]' size={20} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="from-input" className="text-[var(--text-gray)] opacity-70 text-xs">From</label>
                            <input
                                id="from-input"
                                type="text"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                className="text-[var(--text-gray)] font-semibold text-sm bg-transparent focus:outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* To */}
                    <div className="relative flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[180px]">
                        <div className='bg-[var(--primary)] h-[46px] w-[46px] aspect-square flex items-center justify-center rounded-full mr-2'>
                            <FaLocationArrow className='text-[var(--text-gray)]' size={20} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="to-input" className="text-[var(--text-gray)] opacity-70 text-xs">To</label>
                            <input
                                id="to-input"
                                type="text"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                className="text-[var(--text-gray)] font-semibold text-sm bg-transparent focus:outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className='px-3'>
                        <button type="submit" className="bg-[var(--secondary)] text-white rounded-full px-6 py-3 ml-1 flex items-center cursor-pointer">
                            <span className="mr-2">
                                <FiSearch />
                            </span>
                            <span>Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HeroSection;