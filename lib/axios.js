// /lib/axios.js

import useAuthStore from '@/hooks/useAuthStore';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const refreshed = await useAuthStore.getState().refreshAccessToken();
      
      if (refreshed) {
        const token = Cookies.get('access_token');
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      }
      
      useAuthStore.getState().logout();
    }
    
    return Promise.reject(error);
  }
);

export default api;