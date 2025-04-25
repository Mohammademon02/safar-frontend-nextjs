import Image from "next/image";
import React from "react";

const HowItWorks = () => {
    return (
        <section className="bg-[#212121] text-white py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 mb-8 md:mb-0 text-left space-y-10">
                    <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                        How It Works
                    </h2>
                    <div className="relative space-y-8">
                        <div className="absolute top-0 left-[7px] bottom-0 w-px bg-gray-600"></div>

                        <div className="relative flex items-start animate-fade-in-left">
                            <span className="w-4 h-4 aspect-square border-2 border-white rounded-full cursor-pointer flex items-center justify-center bg-gray-900 z-10 transform transition-all duration-500 hover:scale-125"></span>
                            <div className="ml-[18px]">
                                <h3 className="text-base font-semibold mt-[-5px] mb-2">Create Your Route</h3>
                                <p className="text-sm">
                                    Enter your pickup & drop location or the number of hours you wish to book a car.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex items-start animate-fade-in-left delay-200">
                            <span className="w-4 h-4 aspect-square border-2 border-white rounded-full cursor-pointer flex items-center justify-center bg-gray-900 z-10 transform transition-all duration-500 hover:scale-125"></span>
                            <div className="ml-[18px]">
                                <h3 className="text-base font-semibold mt-[-5px] mb-2">Choose Vehicle For You</h3>
                                <p className="text-sm">
                                    On the day of your ride, you will receive a call and SMS update, then confirm booking your car.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex items-start animate-fade-in-left delay-400">
                            <span className="w-4 h-4 aspect-square border-2 border-white rounded-full cursor-pointer flex items-center justify-center bg-gray-900 z-10 transform transition-all duration-500 hover:scale-125"></span>
                            <div className="ml-[18px]">
                                <h3 className="text-base font-semibold mt-[-5px] mb-2">Enjoy The Journey</h3>
                                <p className="text-sm">
                                    After your ride, we would appreciate it if you could rate your car and driver.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 animate-fade-in-right">
                    <Image
                        src="/images/how-it-works.png"
                        width={660}
                        height={387}
                        alt="Car at night"
                        className="rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;