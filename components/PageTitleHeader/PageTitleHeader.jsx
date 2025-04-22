'use client';
import React from 'react';
import Link from 'next/link';

export default function PageTitleHeader({
  title,
  page_link,
  titleTwo,
  page_linkTwo,
}) {
  return (
    <section className="mb-7 lg:mb-10">
      <div className="py-[45px] px-5 bg-[var(--light-gray)]">
        <div className="container mx-auto font-roboto">
          <h2 className="text-[var(--text-black)] text-center text-3xl md:text-4xl font-wix font-medium mb-1 leading-snug">
            {titleTwo ? titleTwo : title}
          </h2>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-1 text-xs">
            <Link href='/' className='text-[var(--text-black)] hover:font-semibold transition-all duration-300'>
              Home
            </Link>
            {title && <span className='text-[var(--text-gray)]'>/</span>}

            {title && page_link ? (
              <Link href={`/${page_link}`} className='text-[var(--text-black)] font-semibold transition-all duration-300'>
                {title}
              </Link>
            ) : (
              <span className='text-[var(--text-black)] font-semibold cursor-pointer'>
                {title}
              </span>
            )}

            {title && titleTwo && <span className='text-[var(--text-gray)]'>/</span>}

            {titleTwo && page_linkTwo ? (
              <Link
                href={`/${page_linkTwo}`}
                className='text-[var(--text-black)] font-semibold hover:font-semibold transition-all duration-300'
              >
                {titleTwo}
              </Link>
            ) : (
              <span className='text-[var(--text-black)] font-semibold cursor-pointer'>
                {titleTwo}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
