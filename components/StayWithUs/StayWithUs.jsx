import React from "react";
import { MdOutlineVerifiedUser, MdAccessAlarm, MdDirectionsCar, MdFlightTakeoff, MdPhoneIphone, MdLocalOffer } from "react-icons/md";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

const StayWithUs = () => {
    const items = [
        {
            icon: <MdOutlineVerifiedUser />,
            title: "Safety First",
            description: "Your safety is our highest priority. Every driver is fully verified and rides are tracked in real-time. Enjoy your journey with complete peace of mind."
        },
        {
            icon: <MdAccessAlarm />,
            title: "Prices with no Surprises",
            description: "Transparent pricing with no hidden charges. Know your fare before you ride. Pay exactly what you see — no last-minute shocks."
        },
        {
            icon: <MdDirectionsCar />,
            title: "Private Travel Solution",
            description: "Experience fully private, sanitized rides for your personal or business needs. No ride-sharing with strangers. Comfort and privacy, guaranteed."
        },
        {
            icon: <MdFlightTakeoff />,
            title: "Assured AC Rides",
            description: "Every SAFAR ride comes with a guaranteed air-conditioned car. Stay cool and comfortable no matter the weather. We promise a premium ride experience."
        },
        {
            icon: <MdPhoneIphone />,
            title: "No Ride Refusal",
            description: "Once your ride is confirmed, it's guaranteed. No cancellations, no excuses. We’re committed to getting you to your destination without hassle."
        },
        {
            icon: <MdLocalOffer />,
            title: "24x7 Dedicated Support",
            description: "Our support team is always available—day or night. Get real-time assistance anytime during your ride. Your comfort and concerns are our priority."
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