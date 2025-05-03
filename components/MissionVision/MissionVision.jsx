// components/MissionVision.js
import React from 'react';
import Image from 'next/image';
import './style.css';

const MissionVision = () => {
    return (
        <div className="container px-4 sm:px-6 lg:px-8 mission-vision-container pt-20 pb-10">
            <section className="mission-section">
                <h2 className="section-heading">Our mission</h2>
                <p className="section-paragraph">
                    Our mission is to provide exceptional car rental services that make urban travel easy, affordable, and enjoyable. We aim to create a seamless experience by offering a diverse fleet of vehicles, flexible rental options, and outstanding customer support. We are committed to being your trusted partner in city travel, ensuring every journey is smooth, convenient, and tailored to your needs.
                </p>

                <div className="image-grid">
                    {/* Column 1: 2 images (first 33%, second 67%) */}
                    <div className="image-grid-item item-1">
                        <Image
                            src="/images/Banner-01.jpg"
                            alt="Mission image"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                    <div className="image-grid-item item-2">
                        <Image
                            src="/images/Banner-02.jpg"
                            alt="Customer service"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                    
                    {/* Column 2: 1 image (100% height) */}
                    <div className="image-grid-item item-3">
                        <Image
                            src="/images/Banner-03.jpg"
                            alt="Car on road"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                    
                    {/* Column 3: 2 images (both 50% height) */}
                    <div className="image-grid-item item-4">
                        <Image
                            src="/images/Banner-02.jpg"
                            alt="Car at night"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                    <div className="image-grid-item item-5">
                        <Image
                            src="/images/Banner-01.jpg"
                            alt="Business people"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                    
                    {/* Column 4: 2 images (first 67%, second 33%) */}
                    <div className="image-grid-item item-6">
                        <Image
                            src="/images/Banner-03.jpg"
                            alt="Road sign"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                    <div className="image-grid-item item-7">
                        <Image
                            src="/images/Banner-01.jpg"
                            alt="City driving"
                            layout="fill"
                            objectFit="cover"
                            className="grid-image"
                        />
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <h2 className="section-heading">Our Vision</h2>
                <ul className="vision-list">
                    <li className="vision-item">
                        <strong>Customer Focus:</strong> We put our customers at the heart of everything we do. Your satisfaction is our top priority, and we strive to exceed your expectations with every rental experience.
                    </li>
                    <li className="vision-item">
                        <strong>Integrity:</strong> Honesty and transparency are the cornerstones of our business. We believe in building trust through clear communication and fair pricing without hidden fees.
                    </li>
                    <li className="vision-item">
                        <strong>Reliability:</strong> Our customers rely on us for safe and dependable transportation. We maintain our vehicles to the highest standards to ensure you have a worry-free driving experience.
                    </li>
                    <li className="vision-item">
                        <strong>Innovation:</strong> We embrace new technologies and ideas to enhance our services. From easy online booking to vehicle tracking, we are always looking for ways to improve.
                    </li>
                    <li className="vision-item">
                        <strong>Sustainability:</strong> We are committed to reducing our environmental impact. Our fleet includes eco-friendly vehicles, and we promote responsible driving practices to protect our planet.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default MissionVision;