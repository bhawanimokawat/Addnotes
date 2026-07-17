import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "username",
        res.data.user.name
      );

      navigate("/dashboard");

    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (

    <div className="container vh-100 d-flex justify-content-center align-items-center">

      <div
        className="card shadow p-4"
        style={{
          width: "450px",
          borderRadius: "20px",
        }}
      >

        <h2 className="text-center mb-2">

          Welcome Back 👋

        </h2>

        <p className="text-center text-muted mb-4">

          Login to continue

        </p>

        <form onSubmit={handleLogin}>

          <input

            type="email"

            className="form-control mb-3"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

          />

          <input

            type="password"

            className="form-control mb-4"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

          />

          <button className="btn btn-primary w-100">

            Login

          </button>

        </form>

        <p className="text-center mt-4 mb-0">

          Don't have an account?

          <Link
            to="/register"
            className="ms-2 text-decoration-none fw-bold"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}