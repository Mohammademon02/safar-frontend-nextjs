import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter, FaYoutube, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] text-white pt-20 pb-11">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col md:flex-row justify-between gap-5">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="mb-7">
              <Link href="/" className="text-xl font-bold">
                <Image
                  src="/images/safarbd-logo.png"
                  alt="Safar Logo"
                  width={118}
                  height={28}
                  priority={true}  // Ensure faster load for critical image
                  className="mr-2"
                />
              </Link>
            </div>

            <div className="flex space-x-4 mb-4">
              <Link href="#" className="h-8 w-8 flex items-center justify-center bg-[var(--primary)] rounded-full">
                <FaFacebookF />
              </Link>
              <Link href="#" className="h-8 w-8 flex items-center justify-center bg-[var(--primary)] rounded-full">
                <FaInstagram />
              </Link>
              <Link href="#" className="h-8 w-8 flex items-center justify-center bg-[var(--primary)] rounded-full">
                <FaXTwitter />
              </Link>
              <Link href="#" className="h-8 w-8 flex items-center justify-center bg-[var(--primary)] rounded-full">
                <FaYoutube />
              </Link>
            </div>

            {/* Advice Section */}
            <div className="flex flex-col items-center md:items-start">
              <label htmlFor="advice" className="text-base text-white mb-[6px]">
                Subscribe to our Newsletter
              </label>
              <div className="messageBox">
                <div className="fileUploadWrapper">
                  <label htmlFor="file">
                    <span className="tooltip">Add an image</span>
                  </label>
                  <input type="file" id="file" name="file" />
                </div>
                <input
                  required
                  placeholder="Message..."
                  type="text"
                  id="messageInput"
                />
                <button id="sendButton">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                    <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="33.67"
                      stroke="#6c6c6c"
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h4 className="text-lg text-white font-bold mb-8">Company</h4>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/about-us" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">About Us</Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blogs" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">Blogs</Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/testimonials" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">Testimonials</Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/contact-us" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">Contact Us</Link>
            </div>
          </div>

          {/* Registered Office */}
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h4 className="text-lg text-white font-bold mb-8">Contact Us</h4>
            <div className="flex items-center gap-3 mb-4">
              <span><FaLocationDot /></span>
              <Link href="/contact-us" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">Debiddar, Cumilla</Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span><FaPhoneVolume /></span>
              <Link href="tel:+8807811905127" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">+8807811905127</Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span><IoMail /></span>
              <Link href="mailto:saft.bd@gmail.com" className="text-white transition duration-300 ease-in-out hover:text-[var(--secondary)]">saft.bd@gmail.com</Link>
            </div>
          </div>

          {/* Download The App Section */}
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h4 className="text-lg text-white font-bold mb-8">Download The App</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-xl font-bold text-yellow-400">
                <Image
                  src="/images/google-play.svg"
                  alt="Download on Google Play"
                  width={180}
                  height={30}
                  className="mr-2"
                />
              </Link>
              <Link href="/" className="text-xl font-bold text-yellow-400">
                <Image
                  src="/images/apple-store.svg"
                  alt="Download on Apple Store"
                  width={180}
                  height={30}
                  className="mr-2"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <span className="flex items-center pt-11">
            <span className="h-px flex-1 bg-[#A3A3A3]"></span>

            <span className="shrink-0 px-4 text-[#A3A3A3]"> Copyright @2025 </span>

            <span className="h-px flex-1 bg-[#A3A3A3]"></span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;