// layout/MainLayout.tsx

import { Outlet } from "react-router-dom";
import MainSidebar from "./sidebar/MainSidebar";

const MainLayout = () => {
  return (
    <div className="h-screen grid grid-rows-[64px_1fr]">
      {/* Header */}
      <header className="border-b flex items-center px-4">
        Header
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-[320px_1fr] overflow-hidden">
        {/* Sidebar */}
        <aside className="border-r overflow-y-auto">
          <MainSidebar />
        </aside>

        {/* Chat Window */}
        <main className="overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;