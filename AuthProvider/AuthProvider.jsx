'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useAuthStore from '@/hooks/useAuthStore';

export default function AuthProvider({ children }) {
  const { isAuth } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    const protectedRoutes = ['/profile', '/driver-registration', '/booking'];
    const authRoutes = ['/login', '/register', '/forgot-password'];
    
    const isProtectedRoute = protectedRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`));
    const isAuthRoute = authRoutes.some(route => pathname === route);
    
    if (isProtectedRoute && !isAuth) {
      router.replace('/login');
    } else if (isAuthRoute && isAuth) {
      router.replace('/');
    }
  }, [isAuth, pathname, router]);
  
  return children;
}