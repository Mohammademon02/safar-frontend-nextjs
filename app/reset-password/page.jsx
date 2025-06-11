'use client'

import { useState, useRef, useEffect } from 'react';
import { FiPhone, FiArrowLeft, FiCheckCircle, FiAlertCircle, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export default function ForgotPasswordPage() {
    const [step, setStep] = useState('phone'); // 'phone', 'otp', 'password', 'success'
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    
    const otpRefs = [useRef(), useRef(), useRef(), useRef()];

    // Timer for resend OTP
    useEffect(() => {
      let interval;
      if (step === 'otp' && timer > 0) {
        interval = setInterval(() => {
          setTimer(prev => {
            if (prev <= 1) {
              setCanResend(true);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [step, timer]);
  
    const handlePhoneChange = (e) => {
      const phoneNumber = e.target.value.replace(/\D/g, '').slice(0, 11);
      setPhoneNumber(phoneNumber);
    };
  
    const validatePhoneNumber = (phone) => {
      // Check if it's 11 digits starting with 01
      return phone.length === 11 && phone.startsWith('01');
    };

    const validatePassword = (pass) => {
      // At least 6 characters, 1 uppercase, 1 lowercase, 1 number
      const minLength = pass.length >= 6;
      const hasUpper = /[A-Z]/.test(pass);
      const hasLower = /[a-z]/.test(pass);
      const hasNumber = /\d/.test(pass);
      
      return {
        valid: minLength && hasUpper && hasLower && hasNumber,
        minLength,
        hasUpper,
        hasLower,
        hasNumber
      };
    };

    const handleOtpChange = (index, value) => {
      if (value.length > 1) return; // Only allow single digit
      
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        otpRefs[index + 1].current?.focus();
      }
    };

    const handleOtpKeyDown = (index, e) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        otpRefs[index - 1].current?.focus();
      }
      if (e.key === 'Enter') {
        handleOtpSubmit();
      }
    };
  
    const handlePhoneSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
      if (!phoneNumber) {
        setError('Please enter your phone number');
        return;
      }
      
      if (!validatePhoneNumber(phoneNumber)) {
        setError('Please enter a valid phone number (01XXXXXXXXX)');
        return;
      }
  
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep('otp');
        setTimer(60);
        setCanResend(false);
      }, 2000);
    };

    const handleOtpSubmit = async () => {
      const otpValue = otp.join('');
      setError('');
      
      if (otpValue.length !== 4) {
        setError('Please enter the complete 4-digit code');
        return;
      }
      
      setIsLoading(true);
      
      // Simulate API call - in real app, verify OTP
      setTimeout(() => {
        setIsLoading(false);
        // For demo purposes, any 4-digit code works
        setStep('password');
      }, 2000);
    };

    const handlePasswordSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
      if (!password) {
        setError('Please enter a new password');
        return;
      }
      
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.valid) {
        setError('Password must be at least 8 characters with uppercase, lowercase, and number');
        return;
      }
      
      if (!confirmPassword) {
        setError('Please confirm your password');
        return;
      }
      
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      
      setIsLoading(true);
      
      // Simulate API call to reset password
      setTimeout(() => {
        setIsLoading(false);
        setStep('success');
      }, 2000);
    };

    const handleResendOtp = async () => {
      setError('');
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setTimer(60);
        setCanResend(false);
        setOtp(['', '', '', '']);
        // Focus first OTP input
        otpRefs[0].current?.focus();
      }, 1500);
    };
  
    const handleBackToLogin = () => {
      // In a real app, you'd use Next.js router here
      console.log('Navigate back to login');
    };
  
    const handleTryAgain = () => {
      setStep('phone');
      setPhoneNumber('');
      setOtp(['', '', '', '']);
      setPassword('');
      setConfirmPassword('');
      setError('');
    };

    const handleBackToPhone = () => {
      setStep('phone');
      setError('');
    };

    const handleBackToOtp = () => {
      setStep('otp');
      setError('');
    };

    // Success Page
    if (step === 'success') {
      return (
        <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Password Reset Successful!
              </h1>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your password has been successfully reset. You can now login with your new password.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleBackToLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  Go to Login
                </button>
                
                <button
                  onClick={handleTryAgain}
                  className="w-full text-gray-600 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
                >
                  Reset Another Account
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Password Reset Page
    if (step === 'password') {
      const passwordValidation = validatePassword(password);
      
      return (
        <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiLock className="w-8 h-8 text-purple-600" />
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Create New Password
                </h1>
                
                <p className="text-gray-600 leading-relaxed">
                  Your phone number has been verified. Please create a new secure password.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-6">
                {/* New Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Password Requirements */}
                  {password && (
                    <div className="mt-2 space-y-1 text-xs">
                      <div className={`flex items-center gap-2 ${passwordValidation.minLength ? 'text-green-600' : 'text-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${passwordValidation.minLength ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        At least 8 characters
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasUpper ? 'text-green-600' : 'text-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${passwordValidation.hasUpper ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        One uppercase letter
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasLower ? 'text-green-600' : 'text-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${passwordValidation.hasLower ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        One lowercase letter
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${passwordValidation.hasNumber ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        One number
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Password Match Indicator */}
                  {confirmPassword && (
                    <div className={`mt-2 flex items-center gap-2 text-xs ${password === confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                      <div className={`w-2 h-2 rounded-full ${password === confirmPassword ? 'bg-green-600' : 'bg-red-600'}`}></div>
                      {password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                    </div>
                  )}
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <FiAlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handlePasswordSubmit}
                  disabled={isLoading || !passwordValidation.valid || password !== confirmPassword}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Resetting Password...
                    </div>
                  ) : (
                    'Reset Password'
                  )}
                </button>
              </div>

              {/* Back to OTP */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleBackToOtp}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  Back to Verification
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // OTP Verification Page
    if (step === 'otp') {
      return (
        <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiLock className="w-8 h-8 text-green-600" />
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Enter Verification Code
                </h1>
                
                <p className="text-gray-600 leading-relaxed">
                  We've sent a 4-digit code to{' '}
                  <span className="font-semibold text-gray-900">{phoneNumber}</span>
                </p>
              </div>

              {/* OTP Input */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                    Verification Code
                  </label>
                  <div className="flex justify-center gap-3 mb-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={otpRefs[index]}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        disabled={isLoading}
                      />
                    ))}
                  </div>
                  
                  {error && (
                    <div className="mb-4 flex items-center justify-center gap-2 text-red-600 text-sm">
                      <FiAlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  {/* Timer and Resend */}
                  <div className="text-center text-sm text-gray-500 mb-6">
                    {!canResend ? (
                      <p>Didn't receive the code? Resend in {timer}s</p>
                    ) : (
                      <button
                        onClick={handleResendOtp}
                        disabled={isLoading}
                        className="text-blue-600 hover:text-blue-700 font-medium disabled:text-blue-400"
                      >
                        Resend Code
                      </button>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleOtpSubmit}
                  disabled={isLoading || otp.join('').length !== 4}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    'Verify Code'
                  )}
                </button>
              </div>

              {/* Back to Phone */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleBackToPhone}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  Change Phone Number
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Phone Number Input Page
    return (
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiPhone className="w-8 h-8 text-blue-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Reset Password
              </h1>
              
              <p className="text-gray-600 leading-relaxed">
                Enter your phone number and we'll send you a verification code to reset your password.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="01XXXXXXXXX"
                    maxLength="14"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    disabled={isLoading}
                    onKeyDown={(e) => e.key === 'Enter' && handlePhoneSubmit(e)}
                  />
                  <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                {error && (
                  <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                    <FiAlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  We'll send a 4-digit verification code via SMS
                </p>
              </div>

              <button
                onClick={handlePhoneSubmit}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Code...
                  </div>
                ) : (
                  'Send Verification Code'
                )}
              </button>
            </div>

            {/* Back to Login */}
            <div className="mt-8 text-center">
              <button
                onClick={handleBackToLogin}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
              >
                <FiArrowLeft className="w-4 h-4" />
                Back to Login
              </button>
            </div>

            {/* Additional Help */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
              <p>
                Still having trouble?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}