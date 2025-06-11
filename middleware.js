import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;
  const url = req.nextUrl;
  const pathname = url.pathname;


  const protectedRoutes = [
    '/dashboard',
    '/dashboard/:path*',
    '/driver-registration'
  ];

  const authRoutes = ['/login', '/register', '/reset-password', '/verify-otp'];

  // Redirect to auth routes if no token
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Prevent Authenticated user from accessing auth routes
  if (authRoutes.includes(req.nextUrl.pathname)) {
    if (token) {
      // Redirect to dashboard if token exists
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
