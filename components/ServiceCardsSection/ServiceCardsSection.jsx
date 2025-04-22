'use client';

import Link from 'next/link';
import { FaTaxi } from 'react-icons/fa6';
import { MdCall } from 'react-icons/md';
import { IoAirplane } from 'react-icons/io5';

const services = [
    {
        title: 'One Way Taxi',
        icon: <FaTaxi />,
        description: 'SAFAR has come up with a solution to this problem in the form of One Way Taxi.',
        cta: 'Book Now',
        href: '#',
    },
    {
        title: 'Taxi Pool',
        icon: <FaTaxi />,
        description: 'SAFAR has come up with a solution to this problem in the form of One Way Taxi.',
        cta: 'Book Now',
        href: '#',
    },
    {
        title: 'Airport Transport',
        icon: <IoAirplane />,
        description: 'SAFAR has come up with a solution to this problem in the form of One Way Taxi.',
        cta: 'Book Now',
        href: '#',
    },
    {
        title: '24/7 Customer Support',
        icon: <MdCall />,
        description: 'SAFAR has come up with a solution to this problem in the form of One Way Taxi.',
        cta: 'Book Now',
        href: '#',
    },
];

export default function ServiceCardsSection() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center px-8 py-6 bg-white text-center rounded-[20px] shadow-lg"
                    >
                        <div className="h-8 w-8 p-2 rounded-full bg-[var(--primary)] flex items-center justify-center text-xl">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold mt-3">{service.title}</h3>
                        <p className="text-gray-500 mt-2">{service.description}</p>
                        <Link
                            href={service.href}
                            className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] px-4 py-2 rounded-full transition cursor-pointer"
                        >
                            {service.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
