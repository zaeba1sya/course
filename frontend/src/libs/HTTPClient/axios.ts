import { default as axiosLib } from 'axios';

export const axios = axiosLib.create({
    baseURL: process.env.REACT_APP_PUBLIC_API || '',
});

axios.interceptors.response.use(
    (response) => response,
    (reject) => {
        if (!reject.response) {
            return Promise.reject(reject);
        }
        return Promise.reject(reject.response);
    },
);
