import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5278',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`[API] ${error.response.status} — ${error.config?.url}`);
    } else if (error.request) {
      console.error('[API] Sin respuesta del servidor');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
