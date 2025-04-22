'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { blogs } from '@/data/blog';
import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';

export default function BlogDetails() {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return notFound();

    return (
        <>
            <PageTitleHeader
                title='Blogs'
                page_link='blogs'
                titleTwo='Blog Details'
            />

            <div className="container px-4 sm:px-6 lg:px-8 pb-10">
                <div className="max-w-4xl mx-auto">
                    <Image
                        src={blog?.imageUrl}
                        alt={blog?.title}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl mb-6"
                    />

                    <h1 className="text-3xl font-bold text-[var(--text-black)] mb-4">
                        {blog?.title}
                    </h1>

                    <p className="text-[15px] text-[var(--text-gray)] leading-relaxed">
                        {blog?.description}
                    </p>
                </div>
            </div>
        </>
    );
}
