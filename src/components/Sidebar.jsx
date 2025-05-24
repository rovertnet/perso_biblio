import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, LogOut, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const { user } = useAuth();
  const links = [
    { to: '/dashboard', label: 'Accueil' },
    { to: '/mes-livres', label: 'Mes livres' },
  ];

  if (user?.role === 'Admin') {
    links.push({ to: '/admin', label: 'Admin' });
  }

  links.push({ to: '/profil', label: 'Profil' });


  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded ${
      location.pathname === path ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
    }`;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 bg-white h-full w-64 p-4 shadow transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">📚 BiblioApp</h2>
          <button onClick={onClose} className="md:hidden">
            <X />
          </button>
        </div>
        <nav className="space-y-2">
          <Link to="/dashboard" className={linkClass('/dashboard')}> <Home size={18} /> Accueil </Link>
          <Link to="/mes-livres" className={linkClass('/mes-livres')}> <BookOpen size={18} /> Mes livres </Link>
          <Link to="/logout" className={linkClass('/logout')}> <LogOut size={18} /> Déconnexion </Link>
        </nav>
      </aside>
    </>
  );
}
