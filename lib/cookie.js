'use client';

import Cookies from 'js-cookie';

export const setCookie = (value, days = 7) => {
  Cookies.set('token', value, { expires: days });
};

export const getCookie = () => {
  return Cookies.get('token');
};

export const removeCookie = () => {
  Cookies.remove('token');
};
