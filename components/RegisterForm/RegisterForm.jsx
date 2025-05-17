'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/hooks/useUser';

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });


    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const { setUser } = useUserStore();

    // React Hook Form setup
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            fullName: '',
            dob: '',
            phone: '',
            password: '',
            confirmPassword: '',
        }
    });

    // Watch password for validation
    const password = watch('password');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        setFormMessage({ type: '', text: '' });

        try {

            let registerPayload = {
                name: data.fullName,
                dob: data.dob,
                phone: data.phone,
                password: data.password,
                password_confirmation: data.confirmPassword,
                role: 'rider'
            }

            const response = await axios.post(`${BASE_URL}api/user/register`, registerPayload);
            console.log(response.data);

            if (response.data.status === 'success') {
                const userInfo = {
                    ...response.data
                }
                setUser(userInfo);
                reset();
                setFormMessage({
                    type: 'success',
                    text:
                        'Registered successfully. Check your phone for the OTP' ||
                        'Registration successful.',
                });
                setTimeout(() => {
                    router.push('/verify-otp');
                }, 800);
            } else {
                setFormMessage({
                    type: 'error',
                    text: response.data.message || 'Registration failed. Please try again.',
                });
                reset();
            }
        } catch (error) {
            console.error('Login failed:', error);
            setFormMessage({
                type: 'error',
                text: 'Registration failed. Please try again.',
            });
        } finally {
            setIsLoading(false);
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
                    Already a Member? <Link href="/login" className="text-[var(--secondary)] font-semibold uppercase underline">LOG IN NOW</Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="w-full max-w-sm">
                    <h2 className="text-2xl font-semibold text-center mb-1 text-[var(--text-black)]">WELCOME TO SAFAR FAMILY</h2>
                    <p className="text-center text-[var(--text-gray)] mb-6">GET STARTED</p>
                    {/* display here the message */}
                    {formMessage.type && (
                        <p className={`text-sm mt-2 ${formMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} p-4 rounded-md mb-4`}>{formMessage.text}</p>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className={`w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
                                    {...register('fullName', {
                                        required: 'Full name is required',
                                        minLength: {
                                            value: 2,
                                            message: 'Name should be at least 2 characters'
                                        }
                                    })}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            {errors.fullName && (
                                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                            )}
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                    className={`w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
                                    {...register('dob', {
                                        required: 'Date of birth is required'
                                    })}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {errors.dob && (
                                <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>
                            )}
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="+8801625XXXXX"
                                    className={`w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
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
                                    className={`w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
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

                        <div>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className={`w-full bg-white px-4 py-3 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] pl-10`}
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: value =>
                                            value === password || 'Passwords do not match'
                                    })}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                {...register('terms', {
                                    required: 'You must agree to our terms and privacy policy'
                                })}
                            />
                            <label htmlFor="terms" className={`ml-2 text-sm`}>
                                Agree to our <Link href="#" className="underline">Terms of use</Link> and <Link href="#" className="underline">Privacy Policy</Link>
                            </label>
                        </div>
                        {errors.terms && (
                            <p className="text-red-500 text-xs -mt-2">{errors.terms.message}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-[var(--secondary)] hover:bg-transparent text-white hover:text-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] rounded-full transition-colors cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <Link href="/help" className="text-sm text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Need help?
                </Link>
            </div>
        </div>
    );
}