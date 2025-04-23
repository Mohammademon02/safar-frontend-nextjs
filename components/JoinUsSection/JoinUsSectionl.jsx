// components/JoinUsSection.js
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

const JoinUsSection = () => {
    return (
        <section className="bg-[#FFFDF5] py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle subtitle="Join Partner" title="Join Us Driver & Car Partner" description="Together we will make Bangladesh private vehicle industry easier and cheaper." />

                <div className="rounded-lg flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 block">
                        <Image
                            src="/images/join-us.png"
                            alt="Earn Money and Respect"
                            layout="responsive"
                            width={724}
                            height={482}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 block">
                        <div className="text-left">
                            <div className="mb-4">
                                <p className="text-gray-700">
                                    <b>Join Us Driver:</b> If you are a skilled driver and have
                                    at least 1 year of experience working as a taxi driver, you
                                    can join us. By joining us you can earn 17500/- to 22500/- per
                                    month. Terms and conditions apply.
                                </p>
                                <Link
                                    href="/join-driver"
                                    passHref
                                    className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] px-4 py-2 rounded-full transition cursor-pointer"
                                >
                                    <span>Join Us</span>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>

                            <div>
                                <p className="text-gray-700">
                                    <b>Attach your Cab:</b> You can join us as a taxi partner, we
                                    are currently adding taxis on 2 models:
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>
                                        If you give us a taxi without a driver, we pay you up to
                                        25000/- per month.
                                    </li>
                                    <li>
                                        If you give us a taxi with a driver, we pay you up to
                                        45000/- per month.
                                    </li>
                                </ul>
                                <p className="text-gray-700">Terms and conditions apply.</p>
                                <Link
                                    href="/attach-cab"
                                    passHref
                                    className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] px-4 py-2 rounded-full transition cursor-pointer"
                                >
                                    <span>Join Us</span>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;