import axios from 'axios';

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
