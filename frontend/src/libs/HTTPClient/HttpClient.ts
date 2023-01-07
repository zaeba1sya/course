import type { IHttpClient } from './HttpClient.interfaces';
import { axios } from './axios';

export const HttpClient: IHttpClient = {
    // @ts-ignore
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    // @ts-ignore
    delete: axios.delete,
};
