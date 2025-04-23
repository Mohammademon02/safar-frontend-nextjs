'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import "./style.css";
export default function ScrollTop() {
  /**
   * Local state
   */
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(500);
  const [scrollDirection, setScrollDirection] = useState('down');

  /**
   * get  pathname
   */
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' or 'instant' as well
    });
  };

  /**
   * handle scroll function
   */
  const handleScroll = () => {
    const currentScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrolled(currentScroll);
    setShowScrollTop(window.scrollY >= window.innerHeight);
    const totalScrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollHeight(totalScrollHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Scroll tracker
   */
  useEffect(() => {
    setScrollDirection('up');
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection('down');
        } else {
          // Scrolling up
          setScrollDirection('up');
        }
      } else {
        // Below 250px
        setScrollDirection('down');
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (scrollDirection == 'up') {
        header.style.top = '0px';
      } else {
        header.style.top = '-135px';
      }
    }
  }, [scrollDirection]);

  /**
   * onScroll class add and remove
   */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('header-bg');
      } else {
        header.classList.remove('header-bg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`progress-wrap ${scrolled > 150 ? 'active-progress' : ''}`}
      onClick={() => scrollToTop()}
    >
      <svg
        className='progress-circle svg-content'
        width='100%'
        height='100%'
        viewBox='-1 -1 102 102'
      >
        <path
          d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
          style={{
            strokeDasharray: '307.919, 307.919',
            strokeDashoffset: 307.919 - (scrolled / scrollHeight) * 307.919,
          }}
        />
      </svg>
    </div>
  );
}
