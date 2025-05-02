// components/BestService.js
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

export default function Stats() {
    return (
        <div className="bg-[#FFFDF5] py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/2">
                    <div className="relative">
                        <Image
                            src="/images/best-service.jpg"
                            alt="Taxi Service"
                            width={724}
                            height={482}
                            className="w-full rounded-[20px]"
                        />
                        <button className="absolute bottom-0 left-0 text-start gap-4 bg-[var(--primary)] text-white py-2 px-4 rounded-tl-none rounded-br-none rounded-[20px] flex items-center">
                            <span className="text-4xl">
                                <FaRegCirclePlay />
                            </span>
                            <span>
                                Play Video To See <br /> Company Experience
                            </span>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">

                    <SectionTitle
                        subtitle="ONLY THE BEST"
                        title="Best One way Taxi Service In This Country"
                        alignment="left"
                    />
                    <p className="mt-4 text-lg text-[var(--text-gray)]">
                        Lorem ipsum dolor sit amet consectetur. Massa morbi purus pulvinar
                        mauris magna arcu felis eget arcu. Hendrerit luctus semper sem
                        placerat pellentesque mi volutpat in lectus. Mattis mi sit vitae
                        pellentesque dolor purus in viverra.
                    </p>
                    <p className="mt-4 text-lg text-[#515151]">
                        Lorem ipsum dolor sit amet consectetur. Ornare nisi tellus dignissim
                        non velit amet nam commodo ultrices.
                    </p>
                    <div className="border-t border-[var(--text-gray)] pt-[21px] mt-6 flex flex-col sm:flex-row sm:items-center">
                        <div className="text-center">
                            <p className="text-[50px] leading-[60px] font-bold text-[var(--primary)]">
                                01+
                            </p>
                            <p className="text-lg leading-[21px] text-[var(--text-gray)] font-bold">
                                Years Experience
                            </p>
                        </div>
                        <div className="text-center mt-6 sm:mt-0 sm:ml-6">
                            <p className="text-[50px] leading-[60px] font-bold text-[var(--primary)]">
                                10k
                            </p>
                            <p className="text-lg leading-[21px] text-[var(--text-gray)] font-bold">
                                Satisfied Clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}