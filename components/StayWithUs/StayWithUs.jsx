import React from "react";
import { MdOutlineVerifiedUser, MdAccessAlarm, MdDirectionsCar, MdFlightTakeoff, MdPhoneIphone, MdLocalOffer } from "react-icons/md";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

const StayWithUs = () => {
    const items = [
        {
            icon: <MdOutlineVerifiedUser />,
            title: "Safety First",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."
        },
        {
            icon: <MdAccessAlarm />,
            title: "Prices With No Surprises",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."
        },
        {
            icon: <MdDirectionsCar />,
            title: "Private Travel Solutions",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."
        },
        {
            icon: <MdFlightTakeoff />,
            title: "Assured AC Rides",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."
        },
        {
            icon: <MdPhoneIphone />,
            title: "No Ride Refusal.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."
        },
        {
            icon: <MdLocalOffer />,
            title: "24x7 Dedicated Support",
            description: "We’re here to assist you anytime, anywhere. Drive with peace of mind knowing help is just a call away."
        },
    ];

    return (
        <section>
            <div className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="STAY WITH US" title="Make Your Trip Way With Us" />
                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-40 md:gap-y-10">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105"
                                >
                                    <div className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-[var(--primary)] text-white">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg leading-6 font-medium text-[var(--text-black)] mt-4">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2 text-base text-[var(--text-gray)]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayWithUs;