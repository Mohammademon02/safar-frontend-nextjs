import LoginForm from '@/components/LoginForm/LoginForm';
import Image from 'next/image';

export default function page() {

    return (
        <div className="min-h-screen bg-white text-white flex items-center justify-center w-full">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="flex w-full overflow-hidden rounded-lg">
                    {/* Left side with background image */}
                    <div className="relative hidden md:block md:w-4/12">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
                        <Image
                            src="/images/left-section.png"
                            alt="Left section image"
                            fill
                            className=""
                            priority
                        />
                        <div className="relative z-20 flex flex-col items-center justify-center h-full p-10">
                            <Image
                                src="/images/login-logo.png"
                                alt="Forest road with car"
                                width={236}
                                height={40}
                                className="mb-3"
                                priority
                            />
                            <div className='text-center'>
                                <h2 className="text-3xl text-white font-bold mb-2">Partnership for Business Growth</h2>
                                <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side with form */}
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};