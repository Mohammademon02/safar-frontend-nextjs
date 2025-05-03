'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const TeamMemberCard = ({ name, title, image, socials }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-[20px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className={`transition-all duration-500 ${isHovered ? 'scale-110 brightness-90' : ''}`}
        />

        {/* Dark overlay on hover */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-40' : 'opacity-0'}`}></div>
      </div>

      {/* Member info with yellow circle - shown by default */}
      <div className={`absolute bottom-0 left-0 transition-all duration-500 transform ${isHovered ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="relative flex items-center justify-center">
          <div className="bg-[var(--primary)] rounded-full w-32 h-32 flex flex-col items-center justify-center -mb-6 -ml-2">
            <h3 className="font-bold text-[var(--text-black)] text-xl uppercase">{name}</h3>
            <p className="text-[var(--text-black)] text-sm">{title}</p>
          </div>
        </div>
      </div>

      {/* Hover overlay with additional info */}
      <div className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-white text-center">
          <h3 className="text-xl font-bold uppercase mb-2">{name}</h3>
          <p className="text-[var(--primary)] mb-4 italic">{title}</p>
          <div className="flex justify-center space-x-3 mt-4">
            <Link href={socials?.facebook} target="_blank" className="text-white hover:text-[var(--primary)] transition-colors">
              <FaFacebook />
            </Link>
            <Link href={socials?.linkedin} target="_blank" className="text-white hover:text-[var(--primary)] transition-colors">
              <FaLinkedin />
            </Link>
            <Link href={socials?.github} target="_blank" className="text-white hover:text-[var(--primary)] transition-colors">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamMemberCard;