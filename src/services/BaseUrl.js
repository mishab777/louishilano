// src/services/BaseUrl.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/v1/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for better error handling
axiosInstance.interceptors.response.use(
  (response) => response, // Forward successful responses
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error); // Forward the error
  }
);


axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('authToken'); 
  if (token) {
    config.headers.Authorization = `Token ${token}`; // Set Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
export default axiosInstance;
