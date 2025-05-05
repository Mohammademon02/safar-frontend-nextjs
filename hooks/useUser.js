import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = null;

export const useUserStore = create()(
  persist(
    (set) => ({
      user: initialState,
      setUser: (item) => set({ user: item }),
      clearUser: () => set({ user: initialState }),
    }),
    {
      name: 'user',
      getStorage: () => localStorage,
    },
  ),
);
