// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { data } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
     try{
       setUser(JSON.parse(userData));
     }catch(error){
      console.error('erreur de parsing JSON userData', error)
      localStorage.removeItem('user')
      sessionStorage.removeItem('user', JSON.stringify(data.user))
     } 
    }
  }, []);

  const login = (data, remember) => {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('token', data.access_token);
    storage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
