// components/MissionVision.js
import React from 'react';
import Image from 'next/image';
import './style.css';

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <section className="mission-section">
        <h2 className="section-heading">Our mission</h2>
        <p className="section-paragraph">
          Our mission is to provide exceptional car rental services that make urban travel easy, affordable, and enjoyable. We aim to create a seamless experience by offering a diverse fleet of vehicles, flexible rental options, and outstanding customer support. We are committed to being your trusted partner in city travel, ensuring every journey is smooth, convenient, and tailored to your needs.
        </p>
        
        <div className="image-grid">
          <div className="image-grid-item">
            <Image 
              src="/images/mission-1.jpg" 
              alt="Car rental mission" 
              layout="responsive"
              width={300}
              height={200}
              className="grid-image"
            />
          </div>
          <div className="image-grid-item">
            <Image 
              src="/images/mission-2.jpg" 
              alt="Customer service" 
              layout="responsive"
              width={300}
              height={200}
              className="grid-image"
            />
          </div>
          <div className="image-grid-item">
            <Image 
              src="/images/mission-3.jpg" 
              alt="Car on road" 
              layout="responsive"
              width={300}
              height={200}
              className="grid-image"
            />
          </div>
          <div className="image-grid-item">
            <Image 
              src="/images/mission-4.jpg" 
              alt="Car at night" 
              layout="responsive"
              width={300}
              height={200}
              className="grid-image"
            />
          </div>
          <div className="image-grid-item">
            <Image 
              src="/images/mission-5.jpg" 
              alt="Business people" 
              layout="responsive"
              width={300}
              height={200}
              className="grid-image"
            />
          </div>
          <div className="image-grid-item">
            <Image 
              src="/images/mission-6.jpg" 
              alt="Road sign" 
              layout="responsive"
              width={300}
              height={200}
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