import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
    return (
        <section className="bg-[var(--primary)] overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side image placeholder */}
                    <div className="w-full md:w-3/12 hidden md:flex justify-center md:justify-start">
                        <div className="relative">
                            <div className="h-60 w-52 relative">
                                <Image
                                    src="/images/download-app-1.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle content */}
                    <div className="w-full md:w-6/12 text-center py-10">
                        <h2 className="text-3xl font-bold text-[var(--text-black)] mb-2">Download the mobile app</h2>
                        <p className="text-[var(--text-gray)] mb-6">Stay with SAFAR and download the mobile app to keep up with SAFAR more easy</p>

                        {/* App store buttons */}
                        <div className="flex justify-center gap-4">
                            <Link href="/" className="text-xl font-bold text-yellow-400">
                                <Image
                                    src="/images/google-play.svg"
                                    alt="Download on Google Play"
                                    width={150}
                                    height={25}
                                    className="mr-2"
                                />
                            </Link>
                            <Link href="/" className="text-xl font-bold text-yellow-400">
                                <Image
                                    src="/images/apple-store.svg"
                                    alt="Download on Apple Store"
                                    width={150}
                                    height={25}
                                    className="mr-2"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Right side image placeholder */}
                    <div className="w-full md:w-3/12 hidden md:flex justify-center md:justify-end mt-8 md:mt-0">
                        <div className="relative">
                            <div className="h-60 w-52 relative">
                                <Image
                                    src="/images/download-app-2.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}