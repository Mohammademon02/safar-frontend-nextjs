'use client';
import React from 'react';
import { FaCar } from 'react-icons/fa'; // Icon used in design, adjust if needed

export default function SectionTitle({ subtitle, title, description }) {
    return (
        <div className="text-center max-w-3xl mx-auto px-4 mb-10">
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-2 text-[var(--primary)] text-sm font-medium mb-2 text-uppercase">
                <FaCar className="text-[var(--primary)]" />
                <span>{subtitle}</span>
            </div>

            {/* Title */}
            
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-black)] mb-3">
                {title}
            </h2>

            {/* Description */}

            <p className="text-[var(--text-gray)] text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}