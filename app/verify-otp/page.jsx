'use client'

import { useUserStore } from '@/hooks/useUser';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaCheckCircle, FaArrowLeft, FaSync } from 'react-icons/fa';

export default function VerifyOtpPage() {

    const { user } = useUserStore();
    const phoneNumber = user?.phone;

    const [otp, setOtp] = useState(['', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState('');

    const inputRefs = useRef([]);

    // Countdown timer for resend
    useEffect(() => {
        if (countdown > 0 && !canResend) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setCanResend(true);
        }
    }, [countdown, canResend]);

    const handleChange = (index, value) => {
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError('');

        // Auto-focus next input
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowRight' && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 4);
        const newOtp = [...otp];

        for (let i = 0; i < pastedData.length && i < 4; i++) {
            if (/^\d$/.test(pastedData[i])) {
                newOtp[i] = pastedData[i];
            }
        }
        setOtp(newOtp);
    };

    const handleVerify = async () => {
        const otpString = otp.join('');

        if (otpString.length !== 4) {
            setError('Please enter all 4 digits');
            return;
        }

        if (!user?.phone) {
            setError('Phone number not found. Please register again.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await axiosInstance.post('/api/user/verify-account', {
                phone: user.phone,
                otp: otpString,
            });

            if (response.data.status === 'success') {
                setIsVerified(true);
            } else {
                setError(response.data.message || 'Invalid OTP. New OTP sent to your mobile number.');
            }
        } catch (err) {
            console.error('OTP Verification Error:', err);
            setError('Verification failed. New OTP sent to your mobile number.');
        } finally {
            setIsLoading(false);
        }
    };


    const handleResend = async () => {
        setIsResending(true);
        setError('');

        if (!user?.phone) {
            setError('Phone number not found. Please register again.');
            setIsResending(false);
            return;
        }

        try {
            const response = await axiosInstance.post('/api/user/req-otp', {
                phone: user.phone,
            });

            if (response.data.status === 'success') {
                setCountdown(60);
                setCanResend(false);
                setOtp(['', '', '', '']);
            } else {
                setError(response.data.message || 'Failed to resend OTP. Please try again.');
            }
        } catch (err) {
            console.error('Resend OTP Error:', err);
            setError('Failed to resend OTP. Please try again.');
        } finally {
            setIsResending(false);
        }
    };


    if (isVerified) {
        return (
            <div className="min-h-[calc(100vh-80px)]  bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
                        <div className="mb-6">
                            <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Verified Successfully!</h1>
                            <p className="text-gray-600">Your phone number has been verified</p>
                        </div>
                        <Link href="/login" className="w-full block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                            Continue to login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <button className="absolute top-6 left-6 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                            <FaArrowLeft className="w-5 h-5" />
                        </button>

                        <div className="mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">📱</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Phone</h1>
                            <p className="text-gray-600">
                                We've sent a 4-digit code to<br />
                                <span className="font-semibold text-gray-900">{phoneNumber}</span>
                            </p>
                        </div>
                    </div>

                    {/* OTP Input */}
                    <div className="mb-6">
                        <div className="flex justify-center space-x-3 mb-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={el => inputRefs.current[index] = el}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ''))}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className={`w-12 h-12 text-center text-xl font-bold border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${digit ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                        } ${error ? 'border-red-500' : ''}`}
                                />
                            ))}
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                        )}
                    </div>

                    {/* Verify Button */}
                    <button
                        onClick={handleVerify}
                        disabled={isLoading || otp.join('').length !== 4}
                        className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-200 mb-6 ${isLoading || otp.join('').length !== 4
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105 cursor-pointer'
                            }`}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <FaSync className="w-5 h-5 animate-spin mr-2" />
                                Verifying...
                            </div>
                        ) : (
                            'Verify OTP'
                        )}
                    </button>

                    {/* Resend Section */}
                    <div className="text-center">
                        <p className="text-gray-600 mb-3">Didn't receive the code?</p>

                        {canResend ? (
                            <button
                                onClick={handleResend}
                                disabled={isResending}
                                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors disabled:opacity-50 cursor-pointer"
                            >
                                {isResending ? (
                                    <span className="flex items-center justify-center cursor-not-allowed">
                                        <FaSync className="w-4 h-4 animate-spin mr-2" />
                                        Resending...
                                    </span>
                                ) : (
                                    'Resend Code'
                                )}
                            </button>
                        ) : (
                            <p className="text-gray-500">
                                Resend code in <span className="font-semibold text-blue-600">{countdown}s</span>
                            </p>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500 text-center">
                            By continuing, you agree to our Terms of Service and Privacy Policy
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}