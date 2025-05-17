'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { LuLoader } from 'react-icons/lu';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/hooks/useUser';
import axios from 'axios';
import { setCookie } from '@/lib/cookie';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const router = useRouter();
    const { setUser } = useUserStore();

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    // React Hook Form setup
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phone: '',
            password: ''
        }
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const loginPayload = {
                phone: data.phone,
                password: data.password
            }

            const response = await axios.post(`${BASE_URL}api/user/login`, loginPayload);
            console.log(response.data);
            if (response.data.status === 'success') {
                const userInfo = {
                    token: response.data.access_token,
                    ...response.data.user
                }
                setCookie(response.data.access_token, ``);
                setUser(userInfo);
                setMessage({ type: 'success', text: 'Login successful' });
                if (window !== undefined) {
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
            setMessage({
                type: 'error',
                text:
                    'Login Failed, Invalid phone number or password.' ||
                    'Login failed. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full md:w-8/12 bg-[#F9F9FA] text-[var(--text-black)] p-6 flex flex-col">
            <div className="flex items-center mb-6">
                <Link href="/" className="flex items-center text-[var(--text-gray)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </Link>
                <div className="ml-auto text-sm text-[var(--text-gray)]">
                    Not a Member? <Link href="/register" className="text-[var(--secondary)] font-semibold uppercase underline">Join Now</Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="w-full max-w-sm">
                    <h2 className="text-[var(--text-black)] text-2xl font-semibold text-center mb-1">WELCOME TO SAFAR FAMILY</h2>
                    <p className="text-center text-[var(--text-gray)] mb-6">WELCOME BACK</p>

                    {/* display here the message */}
                    {message.type && (
                        <p className={`text-sm mt-2 ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} p-4 rounded-md mb-4`}>{message.text}</p>
                    )}

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="+8801625XXXXX"
                                    className={`w-full bg-white px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-[#757575]'} focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^\+?[0-9]{10,15}$/,
                                            message: 'Please enter a valid phone number'
                                        }
                                    })}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                            )}
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className={`w-full bg-white px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-[#757575]'} focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className='flex items-center'>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="h-4 w-4 text-[var(--secondary)] focus:ring-[var(--secondary)] border-gray-300 rounded"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-[var(--text-gray)]">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <Link href="/forgot-password" className="text-sm text-[#5F78FF]">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-3 bg-[var(--secondary)] hover:bg-transparent text-white hover:text-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] rounded-full transition-colors cursor-pointer text-center`}
                            disabled={loading}
                        >
                            {loading ?
                                <LuLoader className="animate-spin " />
                                :
                                'Log In'
                            }
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <Link href="/contact-us" className="text-sm text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Need help?
                </Link>
            </div>
        </div>
    );
}