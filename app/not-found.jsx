import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Meta Data for 404 Page
 */
export const metadata = {
  title: 'Page Not Found || Source - Nextjs',
  description: 'Source - Nextjs',
};

/**
 *
 * JSX Component for 404 Page
 */
export default function notFound() {
  return (
    <>
      <section className='page-404-wrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='image'>
                <Image
                  alt='image'
                  src='/static_images/Oops! 404 Error with a broken robot.gif'
                  width='550'
                  height='319'
                />
              </div>

              <h2 className='title fs-1 fw-semibold mb-2'>
                Please Check the URL and Try Again
              </h2>

              <p className='description'>
                We&quot;re sorry, but we can&quot;t find what you&quot;re
                looking for. You can navigate back to our homepage or use the
                search function to find relevant content.
              </p>
              <Link
                href='/'
                className='tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn'
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
