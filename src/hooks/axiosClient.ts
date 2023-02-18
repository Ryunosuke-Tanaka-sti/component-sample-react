import axios from 'axios';

export const axiosClient = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:4242',
});
