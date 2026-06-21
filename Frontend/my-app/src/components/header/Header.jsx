import SearchBar from "../common/SearchBar";

//import NotificationIcon from "./NotificationIcon";

import ProfileAvatar from "../common/ProfileAvatar";



function Header({
  toggleSidebar,
  search,
  setSearch,
}) {

 
  return (
    <header
      className="
      px-4

      py-3

      d-flex

      justify-content-between

      align-items-center
      "
      style={{
        background: "var(--header)",

        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => {
          toggleSidebar();
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div
        className="
        d-flex

        align-items-center

        gap-3
        "
      >
        

        <ProfileAvatar />
      </div>

    </header>
  );
}

export default Header;