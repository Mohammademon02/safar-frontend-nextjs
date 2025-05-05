'use client';

import { create } from 'zustand';
import { useRouter } from 'next/navigation';
import Http from '@/lib/Http';
import { removeCookie } from '@/lib/cookie';
import toast from 'react-hot-toast';

const useAuthStore = create((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  handleSignOut: async () => {
    set({ isLoading: true });
    const router = useRouter();

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
