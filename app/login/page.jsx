'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function page() {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen bg-white text-white flex items-center justify-center w-full">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="flex w-full overflow-hidden rounded-lg">
                    {/* Left side with background image */}
                    <div className="relative hidden md:block md:w-4/12">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
                        <Image
                            src="/images/left-section.png"
                            alt="Left section image"
                            fill
                            className=""
                            priority
                        />
                        <div className="relative z-20 flex flex-col items-center justify-center h-full p-10">
                            <Image
                                src="/images/login-logo.png"
                                alt="Forest road with car"
                                width={236}
                                height={40}
                                className="mb-3"
                                priority
                            />
                            <div className='text-center'>
                                <h2 className="text-3xl text-white font-bold mb-2">Partnership for Business Growth</h2>
                                <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side with form */}
                    <div className="w-full md:w-8/12 bg-[#F9F9FA] text-[var(--text-black)] p-6 flex flex-col">
                        <div className="flex items-center mb-6">
                            <Link href="/" className="flex items-center text-[var(--text-gray)]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back
                            </Link>
                            <div className="ml-auto text-sm text-[var(--text-gray)]">
                                Not a Member? <Link href="/register" className="text-[var(--secondary)] font-semibold uppercase underline">Join Now</Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-grow">
                            <div className="w-full max-w-sm">
                                <h2 className="text-[var(--text-black)] text-2xl font-semibold text-center mb-1">WELCOME TO SAFAR FAMILY</h2>
                                <p className="text-center text-[var(--text-gray)] mb-6">WELCOME BACK</p>

                                <form className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Date of Birth"
                                            className="w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="+8801625XXXXX"
                                            className="w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className="w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            checked={isChecked}
                                            onChange={() => setIsChecked(!isChecked)}
                                            className="mt-1"
                                        />
                                        <label htmlFor="terms" className="ml-2 text-sm">
                                            Agree to our <Link href="#" className="underline">Terms of use</Link> and <Link href="#" className="underline">Privacy Policy</Link>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-[var(--secondary)] hover:bg-transparent text-white hover:text-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] rounded-full transition-colors cursor-pointer"
                                    >
                                        Log In
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Link href="#" className="text-sm text-gray-500 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Need help?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};