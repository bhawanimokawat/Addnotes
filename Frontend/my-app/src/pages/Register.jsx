import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/users/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      console.log(error.response);

      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

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

          Create Account ✨

        </h2>

        <p className="text-center text-muted mb-4">

          Join and start saving notes

        </p>

        <form onSubmit={handleRegister}>

          <input

            className="form-control mb-3"

            placeholder="Full Name"

            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }

          />

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

          <button className="btn btn-success w-100">

            Create Account

          </button>

        </form>

        <p className="text-center mt-4 mb-0">

          Already have an account?

          <Link

            to="/"

            className="ms-2 text-decoration-none fw-bold"

          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}