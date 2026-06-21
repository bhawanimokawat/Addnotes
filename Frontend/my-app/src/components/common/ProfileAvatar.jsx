import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileAvatar() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "User";

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("username");

    navigate("/");
  };

  return (

    <div
      className="position-relative"
    >

      <div

        className="
        profile-box
        d-flex
        align-items-center
        gap-2
        "

        style={{ cursor: "pointer" }}

        onClick={() =>
          setOpen(!open)
        }

      >

        <i className="bi bi-person-circle fs-3"></i>

        <span>

          {username}

        </span>

        <i className="bi bi-chevron-down"></i>

      </div>

      {open && (

        <div

          className="
          position-absolute
          bg-white
          shadow
          rounded
          p-2
          "

          style={{
            right: 0,
            top: "55px",
            zIndex: 1000,
            minWidth: "140px",
          }}

        >

          <button

            className="btn btn-danger w-100"

            onClick={handleLogout}

          >

            Logout

          </button>

        </div>

      )}

    </div>
  );
}

export default ProfileAvatar;