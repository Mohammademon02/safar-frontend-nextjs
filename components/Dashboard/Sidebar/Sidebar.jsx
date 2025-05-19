'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    FaTh,
    FaShoppingBag,
    FaUser,
    FaSignOutAlt,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { removeCookie } from '@/lib/cookie';
import Http from '@/lib/Http';

export default function Sidebar() {
    const pathName = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        try {
            setIsLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://safar-back-end-v3.vercel.app/';

            // Ensure the base URL doesn't have a trailing slash if the endpoint starts with one
            const url = `${baseUrl}api/user/logout`

            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.status === 'success') {
                localStorage.removeItem('user');

                toast.success('You have successfully logged out');
                if (typeof window !== 'undefined') {
                    window.location.href = '/';
                }
            }
        } catch (error) {
            toast.error('Something went wrong');
            // console.error(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div>
            {/* For Desktop design */}
            <div className="hidden lg:flex lg:flex-col">


                {/* Dashboard */}
                <Link
                    href="/dashboard"
                    className={`flex items-center p-3 rounded-md border border-[#f2f2f2] transition-colors duration-200 ${pathName === '/dashboard' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-white text-[var(--text-black)]'}`}
                >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-black)] mr-3 ${pathName === '/dashboard' ? 'bg-white ' : 'bg-gray-100'}`}>
                        <FaTh size={14} />
                    </div>
                    <span>Dashboard</span>
                </Link>


                {/* Manage profile */}
                <Link
                    href="/dashboard/profile"
                    className={`flex items-center p-3 rounded-md border border-[#f2f2f2] transition-colors duration-200 ${pathName === '/dashboard/profile' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-white text-[var(--text-black)]'}`}
                >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-black)] mr-3 ${pathName === '/dashboard/profile' ? 'bg-white ' : 'bg-gray-100'}`}>
                        <FaUser size={14} />
                    </div>
                    <span>Manage Profile</span>
                </Link>



                {/* Ride History */}
                <Link
                    href="/dashboard/ride-history"
                    className={`flex items-center p-3 rounded-md border border-[#f2f2f2] transition-colors duration-200 ${pathName === '/dashboard/ride-history' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-white text-[var(--text-black)]'}`}
                >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-black)] mr-3 ${pathName === '/dashboard/ride-history' ? 'bg-white ' : 'bg-gray-100'}`}>
                        <FaShoppingBag size={14} />
                    </div>
                    <span>Ride History</span>
                </Link>



                {/* Log out */}
                <button
                    onClick={handleSignOut}
                    className="flex items-center p-3 rounded-md border border-[#f2f2f2] transition-colors duration-200 hover:bg-gray-100 text-left w-full cursor-pointer"
                >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 mr-3">
                        <FaSignOutAlt className="text-gray-600" size={14} />
                    </div>
                    <span>Log Out</span>
                </button>
            </div>



            {/* For Mobile Design */}
            <div className="relative lg:hidden">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-3 bg-blue-500 text-white rounded-md"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dashboard
                    <IoIosArrowDown className="ml-2" />
                </button>
                <ul className="absolute left-0 right-0 mt-2 p-2 bg-white rounded-md shadow-lg z-10 hidden group-focus:block">


                    {/* Dashboard */}
                    <li className="border-b border-gray-200 py-1">
                        <Link
                            href="/dashboard"
                            className={`flex items-center p-3 rounded-md border border-[#f2f2f2] ${pathName === '/dashboard' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-white text-[var(--text-black)]'}`}
                        >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-black)] mr-3 ${pathName === '/dashboard' ? 'bg-white ' : 'bg-gray-100'}`}>
                                <FaTh size={14} />
                            </div>
                            <span>Dashboard</span>
                        </Link>
                    </li>



                    {/* Manage Profile */}
                    <li className="border-b border-gray-200 py-1">
                        <Link
                            href="/dashboard/profile"
                            className={`flex items-center p-3 rounded-md border border-[#f2f2f2] ${pathName === '/dashboard/profile' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-white text-[var(--text-black)]'}`}
                        >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-black)] mr-3 ${pathName === '/dashboard/profile' ? 'bg-white ' : 'bg-gray-100'}`}>
                                <FaUser size={14} />
                            </div>
                            <span>Manage Profile</span>
                        </Link>
                    </li>



                    {/* Ride History */}
                    <li className="border-b border-gray-200 py-1">
                        <Link
                            href="/dashboard/purchase-history"
                            className={`flex items-center p-3 rounded-md border border-[#f2f2f2] ${pathName === '/dashboard/ride-history' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-white text-[var(--text-black)]'}`}
                        >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-black)] mr-3 ${pathName === '/dashboard/ride-history' ? 'bg-white ' : 'bg-gray-100'}`}>
                                <FaShoppingBag size={14} />
                            </div>
                            <span>Ride History</span>
                        </Link>
                    </li>



                    {/* Log Out */}
                    <li className="py-1">
                        <button
                            onClick={handleSignOut}
                            className="flex items-center p-3 rounded-md border border-[#f2f2f2] hover:bg-gray-100 text-left w-full"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 mr-3">
                                <FaSignOutAlt className="text-gray-600" size={14} />
                            </div>
                            <span>Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}