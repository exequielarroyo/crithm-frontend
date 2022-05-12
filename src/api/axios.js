import axios from 'axios';

export const axiosPrivate = axios.create({
  baseURL: 'http://localhost:3002',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
