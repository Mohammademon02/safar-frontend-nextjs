'use client';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuth: false,
      token: null,
      refreshToken: null,
      tokenExp: null,

      login: async (email, password) => {
        try {
          const response = await axios.post(`${API_URL}/Login`, {
            email,
            password
          });

          const {
            user,
            status,
            message,
            access_token,
            refresh_token,
            access_token_exp,
            is_auth
          } = response.data;

          if (status === 'success' && is_auth) {
            Cookies.set('access_token', access_token, {
              expires: new Date(access_token_exp * 1000),
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'Lax'
            });

            Cookies.set('refresh_token', refresh_token, {
              expires: 30,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'Lax'
            });

            set({
              user,
              isAuth: true,
              token: access_token,
              refreshToken: refresh_token,
              tokenExp: access_token_exp
            });

            return { success: true };
          }

          return { success: false, message: message || 'Authentication failed' };
        } catch (error) {
          console.error('Login error:', error);
          return {
            success: false,
            message: error.response?.data?.message || 'Login failed. Please try again.'
          };
        }
      },

      logout: async () => {
        try {
          const token = Cookies.get('access_token');
          if (token) {
            await axios.post(`${API_URL}/Logout`, {}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
          }
        } catch (error) {
          console.error('Logout API error:', error);
        } finally {
          Cookies.remove('access_token');
          Cookies.remove('refresh_token');
          set({
            user: null,
            isAuth: false,
            token: null,
            refreshToken: null,
            tokenExp: null
          });
        }
      },

      refreshAccessToken: async () => {
        try {
          const refreshToken = Cookies.get('refresh_token');

          if (!refreshToken) {
            set({ isAuth: false, user: null, token: null });
            return false;
          }

          const response = await axios.post(`${API_URL}/RefreshToken`, {
            refresh_token: refreshToken
          });

          const { access_token, access_token_exp } = response.data;

          if (access_token) {
            Cookies.set('access_token', access_token, {
              expires: new Date(access_token_exp * 1000),
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'Lax'
            });

            set({ token: access_token, tokenExp: access_token_exp });
            return true;
          }

          return false;
        } catch (error) {
          console.error('Token refresh error:', error);
          set({ isAuth: false, user: null, token: null });
          return false;
        }
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useAuthStore;