// services/bookService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const getUserBooks = async () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  const res = await axios.get(`${API}/books/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
