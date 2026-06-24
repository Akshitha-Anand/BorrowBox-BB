import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Attach token to every request if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Auth endpoints ──────────────────────────────────────────
export const registerUser = (formData) => API.post('/auth/register', formData);
export const loginUser    = (formData) => API.post('/auth/login', formData);

export default API;
