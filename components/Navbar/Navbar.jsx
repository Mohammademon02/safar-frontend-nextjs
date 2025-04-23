"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import "./style.css";

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [mobileDropdownShow, setMobileDropdownShow] = useState(false);
    const pathname = usePathname();


    const showMobileDropdown = () => {
        setMobileDropdownShow(!mobileDropdownShow);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };



    return (
        <header className="navbar bg-[var(--black)] text-white py-4 header" id="navbar">
            <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" replace={true}>
                    <Image
                        src="/images/safarbd-logo.png"
                        alt="Store Experts Logo"
                        loading="lazy"
                        height={28}
                        width={118}
                    />
                </Link>

                <div>
                    <div className="nav-mobile-wrapper lg:hidden">
                        <span className="text-2xl" onClick={toggleNavbar}>
                            <CgMenuRight />
                        </span>
                        {isNavbarOpen && (
                            <div className="overlay" onClick={closeNavbar}></div>
                        )}
                        <div
                            className={`nav-items ${isNavbarOpen ? "show" : ""} bg-[var(--secondary)]`}
                        >
                            <div className="p-4 w-full">
                                <span
                                    className="close-icon inline-block text-sm rounded-full bg-[#212121] text-[#FFFFFF] p-[7px]"
                                    onClick={closeNavbar}
                                >
                                    <CgClose />
                                </span>
                                <div className="text-xl flex flex-col gap-3 mt-12">
                                    <div className="mobile-menu-items space-y-3">
                                        <div>
                                            <Link
                                                href="/"
                                                replace={true}
                                                className={`${pathname === "/"
                                                    ? "font-semibold active"
                                                    : "font-medium"
                                                    } whitespace-nowrap flex items-center`}
                                                onClick={closeNavbar}
                                            >
                                                Home
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                onClick={showMobileDropdown}
                                                href="#"
                                                className={`${pathname === "/services"
                                                    ? "font-semibold active"
                                                    : "font-medium"
                                                    } whitespace-nowrap flex items-center justify-between`}
                                            >
                                                Services 
                                                {/* <MdKeyboardArrowDown /> */}
                                            </Link>
                                            {/*<div
                                                className={`${mobileDropdownShow && "dropdown-show"
                                                    } dropdown`}
                                            >
                                                <div className="mobile-navs">
                                                     <ul className={` p-2 mobile-submenu space-y-3`}>
                                                        <li>
                                                            <Link
                                                                className="text-base flex gap-2 items-center"
                                                                onClick={closeNavbar}
                                                                href="/services/shopify-store-setup"
                                                            >
                                                                <LuSettings className="text-xl" />
                                                                Shopify Store Setup
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="text-base flex gap-2 items-center"
                                                                onClick={closeNavbar}
                                                                href="/services/shopify-theme-customization"
                                                            >
                                                                <MdOutlineDashboardCustomize className="text-xl" />
                                                                Theme Customization
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="text-base flex gap-2 items-center"
                                                                onClick={closeNavbar}
                                                                href="/services/shopify-custom-theme-development"
                                                            >
                                                                <MdDeveloperBoard className="text-xl" />
                                                                Custom Theme Development
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="text-base flex gap-2 items-center"
                                                                onClick={closeNavbar}
                                                                href="/services/shopify-product-upload-maintenance"
                                                            >
                                                                <GrHostMaintenance className="text-xl" />
                                                                Product Upload and Maintenance
                                                            </Link>
                                                        </li>
                                                    </ul> 
                                                </div>
                                            </div>*/}
                                        </div>

                                        <div>
                                            <Link
                                                href="/about-us"
                                                className={`${pathname === "/about-us"
                                                    ? "font-semibold active"
                                                    : "font-medium"
                                                    } whitespace-nowrap block w-full`}
                                                onClick={closeNavbar}
                                            >
                                                About Us
                                            </Link>
                                        </div>

                                        <div>
                                            <Link
                                                href="/blogs"
                                                className={`${(pathname === "/blogs" || pathname.startsWith("/blogs/"))
                                                    ? "font-semibold active"
                                                    : "font-medium"
                                                    } whitespace-nowrap block w-full`}
                                                onClick={closeNavbar}
                                            >
                                                Blogs
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                href="/contact-us"
                                                className={`${pathname === "/contact-us"
                                                    ? "font-semibold active"
                                                    : "font-medium"
                                                    } whitespace-nowrap block w-full`}
                                                onClick={closeNavbar}
                                            >
                                                Contact
                                            </Link>
                                        </div>

                                    </div>

                                    <h2 className="text-center text-2xl font-semibold mt-10 whitespace-nowrap">
                                        Follow Us
                                    </h2>
                                    <div className="mt-2 flex items-center justify-center gap-5 whitespace-nowrap">
                                        <Link
                                            href="https://www.facebook.com/StoreExpertsLLC"
                                            name="link"
                                            role="link"
                                            aria-label="Facebook link"
                                            className="bg-[var(--primary)] text-[#FFFFFF] p-3 rounded-full"
                                        >
                                            <span aria-hidden="true">
                                                <FaFacebookF />
                                            </span>
                                        </Link>

                                        <Link
                                            href="https://twitter.com/StoreExpertsLLC"
                                            name="link"
                                            role="link"
                                            aria-label="Twitter link"
                                            className="bg-[var(--primary)] text-[#FFFFFF] p-3 rounded-full"
                                        >
                                            <span aria-hidden="true">
                                                <FaXTwitter />
                                            </span>
                                        </Link>

                                        <Link
                                            href="https://www.instagram.com/StoreExpertsLLC"
                                            name="link"
                                            role="link"
                                            aria-label="Instagram link"
                                            className="bg-[var(--primary)] text-[#FFFFFF] p-3 rounded-full"
                                        >
                                            <span aria-hidden="true">
                                                <ImInstagram />
                                            </span>
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/company/StoreExpertsLLC"
                                            name="link"
                                            role="link"
                                            aria-label="LinkedIn link"
                                            className="bg-[var(--primary)] text-[#FFFFFF] p-3 rounded-full"
                                        >
                                            <span aria-hidden="true">
                                                <FaLinkedinIn />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-desktop-wrapper hidden lg:block">
                        <div className="flex items-center gap-12 relative">
                            <div className="">
                                <Link
                                    href="/"
                                    replace={true}
                                    className={`${pathname === "/"
                                        ? "font-semibold nav-item active flex items-center gap-1"
                                        : "font-medium nav-item flex items-center gap-1"
                                        } `}
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="group py-3">
                                <Link
                                    href="/services"
                                    replace={true}
                                    className={`${pathname === "/services"
                                        ? "font-semibold nav-item active flex items-center gap-1"
                                        : "font-medium nav-item flex items-center  gap-1"
                                        } `}
                                >
                                    Services 
                                    
                                    {/* <MdKeyboardArrowDown /> */}
                                </Link>

                                {/* <ul className="hidden group-hover:flex flex-wrap navbar-shadow gap-y-5 w-full absolute bottom-0 left-0 translate-y-full  bg-white border z-10 font-medium p-4 rounded-lg ">
                                    <li className="w-1/2">
                                        <Link
                                            className="submenu flex gap-2 items-start p-2 rounded-lg hover:bg-gray-100"
                                            href="/services/shopify-store-setup"
                                        >
                                            <span className="p-2 rounded-md">
                                                <RiStore2Line className="text-2xl text-[#70AC1A]" />
                                            </span>
                                            <div>
                                                <h4 className={`text-gray-700`}>Shopify Store Setup</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="w-1/2">
                                        <Link
                                            className="submenu flex gap-2 items-start p-2 rounded-lg hover:bg-gray-100"
                                            href="/services/shopify-theme-customization"
                                        >
                                            <span className="p-2 rounded-md">
                                                <BsLayoutTextWindowReverse className="text-2xl text-[#70AC1A]" />
                                            </span>
                                            <div>
                                                <h4 className=" text-gray-700">
                                                    Shopify Theme Customization
                                                </h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="w-1/2">
                                        <Link
                                            className="submenu flex gap-2 items-start p-2 rounded-lg hover:bg-gray-100"
                                            href="/services/shopify-custom-theme-development"
                                        >
                                            <span className="p-2 rounded-md">
                                                <HiOutlineAdjustmentsVertical className="text-2xl text-[#70AC1A]" />
                                            </span>
                                            <div>
                                                <h4 className=" text-gray-700">
                                                    Custom Theme Development
                                                </h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="w-1/2">
                                        <Link
                                            className="submenu flex gap-2 items-start p-2 rounded-lg hover:bg-gray-100"
                                            href="/services/shopify-product-upload-maintenance"
                                        >
                                            <span className="p-2 rounded-md">
                                                <SlSettings className="text-2xl text-[#70AC1A]" />
                                            </span>
                                            <div>
                                                <h4 className=" text-gray-700">
                                                    Product Upload and Maintenance
                                                </h4>
                                            </div>
                                        </Link>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="">
                                <Link
                                    href="/about-us"
                                    className={`${pathname === "/about-us"
                                        ? "font-semibold nav-item active flex items-center gap-1"
                                        : "font-medium nav-item flex items-center gap-1"
                                        } `}
                                >
                                    About Us
                                </Link>
                            </div>


                            <div className="">
                                <Link
                                    href="/blogs"
                                    className={`${(pathname === "/blogs" || pathname.startsWith("/blogs/"))
                                        ? "font-semibold nav-item active flex items-center gap-1"
                                        : "font-medium nav-item flex items-center gap-1"
                                        } `}
                                >
                                    Blogs
                                </Link>
                            </div>

                            <div className="">
                                <Link
                                    href="/contact-us"
                                    className={`${pathname === "/contact-us"
                                        ? "font-semibold nav-item active flex items-center gap-1"
                                        : "font-medium nav-item flex items-center gap-1"
                                        } `}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Menu */}
                <div className="flex items-center gap-x-5 relative">
                    <Link
                        className="px-[30px] py-[12px] bg-[#212121] text-[#FFFFFF] rounded-full whitespace-nowrap"
                        href="/login"
                    >
                        Log in
                    </Link>
                    <Link
                        className="px-[30px] py-[12px] bg-[var(--secondary)] text-[#FFFFFF] rounded-full whitespace-nowrap"
                        href="/register"
                    >
                        Sign up
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
