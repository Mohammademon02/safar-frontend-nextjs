'use client';
import React from 'react';
import { FaCar } from 'react-icons/fa'; // Icon used in design, adjust if needed

export default function SectionTitle({ subtitle, title, description, alignment }) {
    return (
        <div className={`text-${alignment || 'center'} max-w-3xl mx-auto mb-10`}>
            {/* Subtitle */}
            {subtitle &&
                <div className={`flex items-center justify-${alignment || 'center'} gap-2 text-[var(--primary)] text-sm font-medium mb-2 uppercase`}>
                    <FaCar className="text-[var(--primary)]" />
                    <span>{subtitle}</span>
                </div>
            }

            {/* Title */}
            {title &&
                <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-black)] mb-3">
                    {title}
                </h2>
            }

            {/* Description */}
            {description &&
                <p className="text-[var(--text-gray)] text-sm md:text-base leading-relaxed">
                    {description}
                </p>
            }
        </div>
    );
}