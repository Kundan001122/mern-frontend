import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: undefined,
      }));
    }
  };

  function Validation(data) {
    const newErrors = {};

    if (data.email.trim() === "") {
      newErrors.email = "Email is required.\nPlease enter your email!";
    }

    if (data.password.trim() === "") {
      newErrors.password = "Password is required.\nPlease enter your password!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

   // Keep everything above the same, just update this function
  const handleLogin = async (e) => {
    e.preventDefault();

    const isValid = Validation(formData);
    if (!isValid) {
      toast.error("Please correct the errors in the form.", {
        autoClose: 2000,
      });
      return;
    }

    try {
      // Call only the admin login route
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/login`,
        formData
      );

      const user = res.data?.user;

      if (user) {
        setformData({ email: "", password: "" });

        localStorage.setItem("id", user._id || "admin-id");
        localStorage.setItem("name", user.name || "Admin");
        localStorage.setItem("email", user.email);

        toast.success("Admin login successful", { autoClose: 1000 });

        setTimeout(() => {
          navigate("/adminadmission");
        }, 1000);
      } else {
        toast.error("Invalid credentials", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || "Admin only access.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <div
          className="card shadow-lg"
          style={{ maxWidth: "500px", width: "100%", borderRadius: "0.5rem" }}
        >
          <div
            className="card-header text-white d-flex align-items-center justify-content-center py-3"
            style={{
              background: "linear-gradient(45deg, #6A11CB, #2575FC)",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span className="me-2 fs-4">🔑</span>
            <h1 className="h4 mb-0">Admin Login</h1>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control form-control-lg ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  name="email"
                  placeholder="Enter your email: admin11@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "0.5rem", borderColor: "#C0C0C0" }}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className={`form-control form-control-lg ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  name="password"
                  placeholder="Enter password: admin1234"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "0.5rem", borderColor: "#C0C0C0" }}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{
                    background: "linear-gradient(to right, #6A11CB, #2575FC)",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Login
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => navigate("/admin-forgot-password")}
                  style={{ textDecoration: "none", color: "#2575FC" }}
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
