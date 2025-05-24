import { NavLink } from 'react-router-dom';
import { Home, BookOpen, User, LogOut, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext'; // ton contexte d'auth

export default function MobileNav() {
  const { user } = useAuth(); // récupère l'utilisateur connecté

  const navItems = [
    { to: '/dashboard', icon: <Home />, label: 'Accueil' },
    { to: '/mes-livres', icon: <BookOpen />, label: 'Livres' },
    { to: '/profil', icon: <User />, label: 'Profil' },
  ];

  if (user?.role === 'admin' || user?.role === 'moderator') {
    navItems.push({ to: '/admin', icon: <ShieldCheck />, label: 'Admin' });
  }

  navItems.push({ to: '/logout', icon: <LogOut />, label: 'Quitter' });

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md flex justify-around items-center h-14 md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? 'text-blue-600' : 'text-gray-500'
            }`
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
