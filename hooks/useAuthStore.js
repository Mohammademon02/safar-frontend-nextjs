import { create } from 'zustand';
import Cookies from 'js-cookie';

const useAuthStore = create((set) => ({
  user: null,
  isAuth: false,
  accessToken: null,
  refreshToken: null,

  setUser: (user, token) => {
    set({ user, accessToken: token, isAuth: true });
    Cookies.set('token', token, { expires: 7 }); // Token expires in 7 days
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
  },

  logout: () => {
    set({ user: null, accessToken: null, refreshToken: null, isAuth: false });
    Cookies.remove('token');
    Cookies.remove('user');
  },

  refreshAccessToken: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/refresh-token`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refresh_token: Cookies.get('refresh_token')
        })
      });

      if (!res.ok) throw new Error('Refresh failed');

      const data = await res.json();
      set({ accessToken: data.access_token, isAuth: true });
      Cookies.set('token', data.access_token, { expires: 7 });
      return data.access_token;
    } catch (err) {
      console.error('Token refresh failed', err);
      set({ user: null, accessToken: null, refreshToken: null, isAuth: false });
      Cookies.remove('token');
      Cookies.remove('user');
      Cookies.remove('refresh_token');
      return null;
    }
  },

  setUserFromCookies: () => {
    const token = Cookies.get('token');
    const userString = Cookies.get('user');
    const refreshToken = Cookies.get('refresh_token');

    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        set({
          user,
          accessToken: token,
          refreshToken,
          isAuth: true
        });
      } catch (error) {
        console.error('Error parsing user from cookie:', error);
        Cookies.remove('user');
      }
    }
  },

  // Function to store refresh token
  setRefreshToken: (refreshToken) => {
    set({ refreshToken });
    Cookies.set('refresh_token', refreshToken, { expires: 30 }); // Refresh token lasts longer
  }
}));

export default useAuthStore;