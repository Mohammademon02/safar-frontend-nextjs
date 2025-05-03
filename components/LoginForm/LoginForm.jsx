'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAuthStore from '@/hooks/useAuthStore';
import http from '@/lib/Http';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { setUser } = useAuthStore();

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

    // Reset error message when form inputs change
    useEffect(() => {
        if (error) setError('');
    }, [error]);

    const onSubmit = async (data, e) => {
        // Prevent default form submission behavior
        if (e) e.preventDefault();

        try {
            setIsLoading(true);
            setError('');

            // Wrap the HTTP request in a try-catch to handle network errors
            let response;
            try {
                response = await http.post('/api/user/login', {
                    phone: data.phone,
                    password: data.password
                });
            } catch (networkErr) {
                console.error('Network error:', networkErr);
                throw {
                    response: {
                        data: {
                            message: 'Network error. Please check your connection.'
                        }
                    }
                };
            }

            // Check if response exists and has data
            if (!response || !response.data) {
                throw {
                    response: {
                        data: {
                            message: 'Invalid server response.'
                        }
                    }
                };
            }

            const responseData = response.data;

            if (responseData.status === 'success') {
                // Store user data in Zustand and cookies
                setUser(responseData.user, responseData.access_token);

                // Redirect user based on role
                if (responseData.user.roles === 'rider') {
                    router.push('/');
                } else if (responseData.user.roles === 'ride-captain') {
                    router.push('/driver-registration');
                } else {
                    router.push('/');
                }
            } else {
                // Handle unsuccessful login with valid response
                setError(responseData.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Login error:', err);
            // Enhanced error handling
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Login failed. Please try again.');
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Handle form submission with React Hook Form
    const formSubmitHandler = (data) => {
        onSubmit(data);
        return false; // Explicitly return false to prevent form submission
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

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(formSubmitHandler)}
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
                                    {...register('rememberMe')}
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
                            disabled={isLoading}
                            className={`w-full py-3 bg-[var(--secondary)] hover:bg-transparent text-white hover:text-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] rounded-full transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {isLoading ? 'Logging in...' : 'Log In'}
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