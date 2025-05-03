'use client';

import axios from 'axios';
import Cookies from 'js-cookie';
import useAuthStore from '@/hooks/useAuthStore';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const http = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Request interceptor
http.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor
http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If error is 401 and we haven't already tried to refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const { refreshAccessToken } = useAuthStore.getState();
                const newAccessToken = await refreshAccessToken();

                if (newAccessToken) {
                    // Update the original request with the new token
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return http(originalRequest);
                } else {
                    // If refresh failed, redirect to login page on client side
                    if (typeof window !== 'undefined') {
                        const { logout } = useAuthStore.getState();
                        logout();
                        window.location.href = '/login';
                    }
                }
            } catch (refreshError) {
                console.error('Refresh token failed:', refreshError);

                // Clear auth state and redirect to login
                if (typeof window !== 'undefined') {
                    const { logout } = useAuthStore.getState();
                    logout();
                    window.location.href = '/login';
                }

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default {
    get: (url, config) => http.get(url, config),
    post: (url, body, config) => http.post(url, body, config),
    put: (url, body, config) => http.put(url, body, config),
    patch: (url, body, config) => http.patch(url, body, config),
    delete: (url, config) => http.delete(url, config),
};