'use client';
import axios from 'axios';
import { HTTPExceptionHandler } from './exception';
import Cookies from 'js-cookie';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// check and see if a token exists and assign
axios.interceptors.request.use(
    (request) => {
        const token = Cookies.get('token');
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (err) => Promise.reject(err),
);

// check the response from the server for anything other than a 200 range
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        HTTPExceptionHandler(error);
        return Promise.reject(error);
    },
);

const Http = {
    get: (url, body) => axios.get(`${BASE_URL}${url}`, body),
    post: (url, body) => axios.post(`${BASE_URL}${url}`, body),
    put: (url, body) => axios.put(`${BASE_URL}${url}`, body),
    delete: (url) => axios.delete(`${BASE_URL}${url}`),
    patch: (url, body) => axios.patch(`${BASE_URL}${url}`, body),
};

export default Http;
