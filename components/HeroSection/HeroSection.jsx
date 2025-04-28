'use client'
import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';

const HeroSection = () => {
    const [date, setDate] = useState("Thu, Oct 06, 2024");
    const [time, setTime] = useState("11 : 20 PM");
    const [from, setFrom] = useState("Uttora, Dhaka");
    const [to, setTo] = useState("Kandirpar, Cumilla");

    return (
        <div className="relative w-full bg-black">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/images/Hero-image.png')",
                    filter: "brightness(0.6)"
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">
                <p className="text-lg md:text-xl font-light mb-2">Where Would You Like To Go?</p>

                <h1 className="text-5xl md:text-7xl font-bold mb-2">Find The Car</h1>

                <div className="flex items-center space-x-2 mb-16">
                    <p className="text-lg text-yellow-400">Your Destination</p>
                    <span className="text-lg">|</span>
                    <p className="text-lg">Our Dedication</p>
                </div>

                {/* Search Form */}
                <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-full flex flex-wrap items-center p-1 md:p-2">
                    {/* Date */}
                    <div className="flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[200px]">
                        <FaCalendarAlt className="text-yellow-500 mr-2" size={20} />
                        <div>
                            <p className="text-gray-500 text-xs">Date</p>
                            <p className="text-black text-sm">{date}</p>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[150px]">
                        <FaClock className="text-yellow-500 mr-2" size={20} />
                        <div>
                            <p className="text-gray-500 text-xs">Time</p>
                            <p className="text-black text-sm">{time}</p>
                        </div>
                    </div>

                    {/* From */}
                    <div className="flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[180px]">
                        <FaMapMarkerAlt className="text-yellow-500 mr-2" size={20} />
                        <div>
                            <p className="text-gray-500 text-xs">From</p>
                            <p className="text-black text-sm">{from}</p>
                        </div>
                    </div>

                    {/* To */}
                    <div className="flex items-center bg-white rounded-full px-3 py-2 md:py-3 flex-1 min-w-[180px]">
                        <FaLocationArrow className="text-yellow-500 mr-2" size={20} />
                        <div>
                            <p className="text-gray-500 text-xs">To</p>
                            <p className="text-black text-sm">{to}</p>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 ml-1 flex items-center">
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;