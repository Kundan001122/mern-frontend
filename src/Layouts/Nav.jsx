import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("id");

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully", { autoClose: 1500 });
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };
  const buttonFontStyle = { fontFamily: "'Georgia', serif", fontWeight: "600" };

  return (
    <nav className="navbar navbar-expand-lg fixed-top darkmode">
      <div className="container">
        <NavLink className="navbar-brand text-white" to={auth ? "#" : "/about2"} style={{ fontFamily: "'Georgia', serif" }}>
          Model Public School
        </NavLink>

        {!auth ? (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/" style={{ fontFamily: "'Georgia', serif" }}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/about2" style={{ fontFamily: "'Georgia', serif" }}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/contact" style={{ fontFamily: "'Georgia', serif" }}>
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link text-white dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Courses Offer
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item text-white" to="/bca" style={{ fontFamily: "'Georgia', serif" }}>
                        BCA
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item ttext-warning" to="/bba" style={{ fontFamily: "'Georgia', serif" }}>
                        BBA
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>

                <li className="nav-item ps-2">
                  <NavLink
                    to="/register"
                    className="btn btn-primary"
                    style={{
                      ...buttonFontStyle,
                      padding: "8px 18px",
                      borderRadius: "25px",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#004085")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
                  >
                    Signup
                  </NavLink>
                </li>

                {/* Login button */}
                <li className="nav-item ps-3">
                  <NavLink
                    to="/login"
                    className="btn btn-info"
                    style={{
                      ...buttonFontStyle,
                      padding: "8px 18px",
                      borderRadius: "25px",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0c5460")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="ms-auto">
            <button className="btn btn-info text-white" onClick={handleLogout} style={buttonFontStyle}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
