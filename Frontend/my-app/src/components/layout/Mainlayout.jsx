import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import RightPanel from "../rightpannel/RightPanel";

function MainLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [search, setSearch] = useState(""); // ✅ ADD THIS
  //console.log("SEARCH STATE:", search);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="d-flex vh-100" style={{ background: "var(--bg)" }}>

      <Sidebar

       

        isOpen={isSidebarOpen}

        closeSidebar={closeSidebar}

      />

      <div className="flex-grow-1">

        <Header
          toggleSidebar={toggleSidebar}
          search={search}
          setSearch={setSearch}
        />

        <main className="main-content p-4">
          {children}
        </main>

      </div>

      <RightPanel />

      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

    </div>
  );
}

export default MainLayout;