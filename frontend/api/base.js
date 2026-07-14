import axios from 'axios';
import { getAuth } from 'firebase/auth';

// 1. Create the base instance
export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // You can remove withCredentials: true if you aren't using custom backend cookies
});

// 2. Add a request interceptor to inject the Firebase JWT token dynamically
baseApi.interceptors.request.use(
  async (config) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        // Force refresh the token if it's expired
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error('Error getting Firebase token:', error);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
