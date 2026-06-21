import ThemeCircles from "../common/ThemeCircles";
import UpgradeCard from "../common/UpgradeCard";
import SidebarMenu from "./SidebarMenu";

function Sidebar({ isOpen, closeSidebar }) {








  return (
    <aside
      className="d-flex flex-column p-4 sidebar"
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "var(--sidebar)",
        borderRight: "1px solid var(--border)",

        /* 🔥 NEW: mobile drawer behavior */
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1050,

        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
      }}
    >




      {/* Close button (mobile only) */}
      <button
        onClick={closeSidebar}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "transparent",
          border: "none",
          fontSize: "20px",
          color: "var(--text)",
          display: "none", // default hidden (we'll enable via CSS)
        }}
        className="sidebar-close-btn"
      >
        ✕
      </button>



      {/* Logo */}

      <h2
        className="fw-bold mb-4"
        style={{
          color: "var(--text)",
        }}
      >
        MINO
      </h2>

      {/* Add Button */}

      <button
        className="btn mb-4"
        style={{
          background: "var(--accent)",

          color: "#fff",

          borderRadius: "14px",

          padding: "12px",
        }}
      >
        + Add New
      </button>

      {/* Menu */}

      <SidebarMenu />

      {/* Theme */}

      <div className="mt-5">

        <h6
          className="mb-3"
        >
          Theme
        </h6>

        <ThemeCircles />

      </div>

      {/* Upgrade */}

      <div className="mt-auto">

        <UpgradeCard />

      </div>
    </aside>
  );
}

export default Sidebar;