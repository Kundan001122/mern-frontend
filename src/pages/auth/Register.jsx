import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [error, setErrors] = useState({});

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function Validation(data) {
    let error = {};

    if (data.name.trim() === "") {
      error.name = "Name is required\nPlease enter your name!";
    }

    if (data.email.trim() === "") {
      error.email = "Email is required\nPlease enter your email!";
    }

    if (data.password.trim() === "") {
      error.password = "Password is required\nPlease enter your password!";
    } else if (data.password.length < 8) {
      error.password = "Password must be at least 8 characters long";
    }

    setErrors(error);
    return Object.keys(error).length === 0;
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const isValid = Validation(data);
    if (!isValid) {
      toast.error("Invalid form", { autoClose: 1000 });
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setData({ name: "", email: "", password: "" });
        toast.success("User registered successfully", { autoClose: 2000 });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        const errorResponse = await res.json();
        toast.error(errorResponse.message || "Registration failed", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Server error:", error);
      toast.error("Server error", { autoClose: 1000 });
    }
  };

  return (
 <Layout>
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div
          className="card shadow-sm"
          style={{
            background: "#fef6ff",
            borderLeft: "5px solid #8e44ad",
          }}
        >
          <div className="card-body p-4">
            <h3
              className="text-center mb-4 text-white py-2 rounded"
              style={{
                background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              }}
            >
              📝 Signup Form
            </h3>

            <form onSubmit={handleRegister}>
              {/* Name Field */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
                {error.name && (
                  <div className="text-danger small mt-1">
                    {error.name.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                {error.email && (
                  <div className="text-danger small mt-1">
                    {error.email.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
                {error.password && (
                  <div className="text-danger small mt-1">
                    {error.password.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>


  );
}
