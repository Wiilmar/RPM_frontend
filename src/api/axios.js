import axios from 'axios'
import { API_URL } from './config'

const baseURL = API_URL

const instance = axios.create({
    baseURL,
})

// Interceptor de solicitudes
instance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance
