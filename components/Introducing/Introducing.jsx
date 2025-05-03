import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import { BiSupport } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";



const Introducing = () => {
    return (
        <div className="w-full bg-white py-12 px-4 md:px-12 lg:px-24 relative overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-7xl mx-auto relative z-10">
                {/* Left Column - Content */}
                <div className="md:col-span-4 space-y-6">
                    <SectionTitle
                        subtitle="Introducing"
                        title="Providing Reliable Car Rentals."
                        alignment="left"
                    />

                    {/* Main Content */}
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Safar, Bangladesh's pioneering mobility platform, is
                            set to redefine how the nation commutes by offering
                            a range of innovative services tailored to meet the
                            diverse needs of passengers and drivers alike.
                        </p>

                        <p>
                            In a country where transportation options are often
                            limited and costs can be prohibitive, Safar stands as
                            a beacon of accessibility and affordability. Whether
                            you're journeying from bustling cities to serene
                            villages or navigating urban streets, Safar ensures
                            that every ride is convenient, cost-effective, and
                            comfortable.
                        </p>

                        <p>
                            Join us on this exciting journey as we transform the
                            way Bangladesh travels. Safar: Your pathway to a
                            brighter, more connected future.
                        </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/images/Team-member-04.jpg"
                            alt="Person driving a car"
                            width={50}
                            height={50}
                            className="w-10 h-10 rounded-full object-cover overflow-hidden flex items-center justify-center"
                        />
                        <div>
                            <p className="font-medium text-gray-800">Kamrul Hassan</p>
                            <p className="text-sm text-gray-500">CEO, Safar</p>
                        </div>
                    </div>
                </div>

                {/* Middle Column - Car Image */}
                <div className="md:col-span-4">
                    <div className="rounded-xl overflow-hidden shadow-lg h-full relative aspect-[3/4]">
                        <Image
                            src="/images/Team-member-04.jpg"
                            alt="Person driving a car"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Column - Features */}
                <div className="md:col-span-4 space-y-8 flex flex-col justify-center h-full">
                    {/* Feature 1 */}
                    <div className="flex space-x-4 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center">
                            <BiSupport />
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800">24/7 Customer Support</h3>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit ametter consectetur. In in lobortisrte
                                quisque enjoy.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex space-x-4 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center">
                            <FaCrown />

                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800">Best Competitive Prices</h3>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit ametter consectetur. In in lobortisrte
                                quisque enjoy.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex space-x-4 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center">
                            <SlLocationPin />

                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800">Pickup Any Location</h3>
                            <p className="font-medium text-gray-800">In Our Country</p>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit ametter consectetur. In in lobortisrte
                                quisque enjoy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introducing;