import { Menu } from 'lucide-react';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b shadow flex items-center px-4 md:px-6 fixed left-0 md:left-64 right-0 top-0 z-10">
      <button onClick={onMenuClick} className="md:hidden mr-4">
        <Menu />
      </button>
      <h1 className="text-xl font-semibold">Tableau de bord</h1>
    </header>
  );
}
