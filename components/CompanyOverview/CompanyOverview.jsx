'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const CompanyOverview = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full bg-[#FFFDF5] py-20">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[36px] shadow-xl">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0">
                            <Image
                                src="/images/Banner-02.jpg"
                                alt="Company team meeting with presentation"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="w-full h-full"
                            />
                        </div>

                        <div className="absolute hidden md:block top-0 right-0 z-10">
                            <div className="bg-[var(--primary)] text-white px-10 py-6 rounded-tr-[36px] rounded-bl-[36px] font-semibold text-3xl tracking-[2px] shadow-md">
                                Company Overview
                            </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            {/* Main play button */}
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="w-20 h-20 bg-white bg-opacity-85 rounded-full flex items-center justify-center cursor-pointer shadow-lg relative pulse-glow"
                                aria-label="Play company overview video"
                            >
                                {/* First wave animation */}
                                <span className="absolute w-full h-full rounded-full bg-white bg-opacity-75 wave-ping"></span>

                                {/* Second wave animation (delayed) */}
                                <span className="absolute w-full h-full rounded-full bg-white bg-opacity-60 wave-ping-delayed"></span>

                                {/* Outer ring animation */}
                                <div className="absolute w-32 h-32 rounded-full border-4 border-white border-opacity-50 wave-ping"></div>

                                {/* Middle ring animation with delay */}
                                <div className="absolute w-28 h-28 rounded-full border-2 border-white border-opacity-40 wave-ping-delayed"></div>

                                {/* Play triangle icon */}
                                <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-gray-800 ml-2 relative z-10"></div>
                            </button>
                        </div>

                        {isPlaying && (
                            <div className="absolute inset-0 bg-black z-20 flex items-center justify-center">
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    className="absolute top-4 right-4 z-30 bg-white rounded-full p-2 cursor-pointer shadow-lg"
                                    aria-label="Close video"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="w-full h-full bg-black">
                                    <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                        Your video would play here
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverview;