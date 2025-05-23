// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   const token = localStorage.getItem('token') || sessionStorage.getItem('token');
   const userRaw = localStorage.getItem('user') || sessionStorage.getItem('user');

   if (token && userRaw) {
      try {
         const userData = JSON.parse(userRaw);
         // Vérification de la validité du token
         setUser(userData);
      } catch (e) {
         console.error("Erreur de parsing JSON userData :", e);
         localStorage.removeItem('user');
         sessionStorage.removeItem('user');
      }
   }
   setLoading(false);
  }, []);


  const login = (data, remember) => {
      const storage = remember ? localStorage : sessionStorage;
      if (data?.access_token && data?.user) {
         storage.setItem('token', data.access_token);
         storage.setItem('user', JSON.stringify(data.user));

         setUser(data.user);
      }
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
