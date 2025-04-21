// components/Hero.js
import Image from 'next/image';

const PageBanner = ({ title, subtitle }) => {
    return (
        <section className="relative">
            {/* Background Image */}
            {/* <img
                src="/images/pageBanner-img.jpg"
                alt="Banner Background"
                className="w-full h-[500px] object-cover"
            /> */}

            <Image
                src="/images/pageBanner-img.jpg"
                alt="Banner Background"
                width={1920} // Provide an appropriate width
                height={500} // Provide an appropriate height
                className="w-full h-[500px] object-cover" // Retain Tailwind classes
                priority // Use priority if this image is above the fold
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#ABC3FD] opacity-20"></div>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                {/* Dynamic Title */}
                <h1 className="text-5xl font-bold text-white">{title}</h1>
                {/* Dynamic Subtitle */}
                {subtitle && <p className="text-xl mt-4 text-white">{subtitle}</p>}
            </div>
        </section>
    );
};

export default PageBanner;