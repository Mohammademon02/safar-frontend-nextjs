import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import { blogs } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
    return (
        <>
            <PageTitleHeader
                title='About Us'
                page_link='about-us'
            />
            {/* Blog Card Section */}
            <div className="container px-4 sm:px-6 lg:px-8 pb-10">
                <SectionTitle
                    subtitle="Blogs"
                    title="Explore Our Blogs"
                    description="Read our latest blogs and stay updated with the latest trends and insights."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.slice(0, 3).map((blog) => (
                        <div
                            key={blog?.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-xl group"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={blog?.imageUrl}
                                    alt={blog?.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-56 object-cover transition duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-[var(--text-black)] mb-2">
                                    {blog?.title}.
                                </h3>
                                <p className="text-[13px] text-[var(--text-gray)] leading-relaxed">
                                    {blog?.shortDescription}
                                </p>

                                <Link
                                    href={`/blogs/${blog?.slug}`}
                                    className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--secondary)] transition duration-300 ease-in-out hover:text-white hover:bg-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] px-4 py-2 rounded-full cursor-pointer"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <Link
                        href="/blogs"
                        className="text-sm text-[var(--text-black)] font-medium"
                    >
                        See More <span className="underline text-[var(--primary)] hover:text-[var(--secondary)] cursor-pointer">Blog</span>
                    </Link>
                </div>
            </div>
        </>
    );
}