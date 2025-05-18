import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${API}/auth/login`, { email, password });
    return response.data; // On renvoie les données, ne pas faire de stockage ici
  } catch (error) {
    throw error.response?.data || { message: 'Erreur de connexion.' };
  }
};

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API}/auth/register`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur d'inscription." };
  }
};

export const logout = async () => {
  try {
    await axios.post(`${API}/auth/logout`);
  } catch (error) {
    throw error.response?.data || { message: 'Erreur de déconnexion.' };
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${API}/auth/user`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Erreur de récupération des informations utilisateur.' };
  }
};
