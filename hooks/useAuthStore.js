'use client';

import { create } from 'zustand';
import Http from '@/lib/Http';
import { removeCookie } from '@/lib/cookie';
import toast from 'react-hot-toast';

const useAuthStore = create((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  // Note: router will be passed from component
  handleSignOut: async (router) => {
    set({ isLoading: true });

    try {
      const response = await Http.get('/api/user/logout');
      if (response.status === 200) {
        localStorage.removeItem('user');
        removeCookie();
        toast.success('You have successfully logged out');
        router.push('/');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
