'use client';

import { useEffect } from 'react';
import useAuthStore from '@/hooks/useAuthStore';

export default function AuthInit({ children }) {
  const { setUserFromCookies } = useAuthStore();

  useEffect(() => {
    setUserFromCookies();
  }, []);

  return <>{children}</>;
}
