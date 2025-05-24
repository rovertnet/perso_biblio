import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="flex-1 md:ml-64">
        <Topbar onMenuClick={handleOpenSidebar} />
        <main className="pt-20 px-4 md:px-6">{children}</main>
      </div>
    </div>
  );
}
