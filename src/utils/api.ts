import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

export const checkDeployStatus = async (deployId: string) => {
  try {
    const response = await api.get(`/api/deploy/${deployId}`);
    return response.data;
  } catch (error) {
    console.error('Error checking deploy status:', error);
    throw error;
  }
};

// Add a request interceptor for error handling
api.interceptors.request.use(
  (config) => config,
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Response Error:', error);
    // You can add custom error handling here, such as showing a notification to the user
    return Promise.reject(error);
  }
);

export default api;