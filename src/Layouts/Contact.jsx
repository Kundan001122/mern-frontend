import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

export default function Contact() {
  const navigate = useNavigate();

  const [error, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    message: "",
  });

  function Validation(data) {
    let error = {};
    if (data.name === "") error.name = "Name is required";
    if (data.email === "") error.email = "Email is required";
    if (data.password === "") {
      error.password = "Password is required";
    } else if (data.password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }
    if (data.mobile === "") error.mobile = "Mobile is required";
    if (data.message === "") {
      error.message = "Message is required";
    } else if (data.message.length < 10) {
      error.message = "Message must be at least 10 characters";
    }

    setErrors({ ...error });
    return Object.keys(error).length < 1;
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const isValid = Validation(data);
      if (isValid) {
        // eslint-disable-next-line no-undef
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/Contacts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        setData({
          name: "",
          email: "",
          password: "",
          mobile: "",
          message: "",
        });

        toast.success("Your form has been successfully sent. I'll contact you soon!", {
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/thankupage");
        }, 2000);
      } else {
        toast.error("Invalid form", { autoClose: 1000 });
      }
    } catch (error) {
      toast.warn("Something went wrong. Try again!");
    }
  };

  return (
    <Layout>
      <div
        className="container py-5"
        style={{ minHeight: "100vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="card shadow-sm border-0"
              style={{
                background: "#fef6ff",
                borderLeft: "5px solid #8e44ad",
              }}
            >
              <div className="card-body">
                <h3
                  className="text-center mb-4 text-white py-2 rounded"
                  style={{
                    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                  }}
                >
                  ✉️ Contact Us
                </h3>

                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                    {error.name && <div className="text-danger">{error.name}</div>}
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                    {error.email && <div className="text-danger">{error.email}</div>}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={data.mobile}
                      onChange={handleChange}
                    />
                    {error.mobile && <div className="text-danger">{error.mobile}</div>}
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    {error.password && <div className="text-danger">{error.password}</div>}
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      value={data.message}
                      onChange={handleChange}
                    ></textarea>
                    {error.message && <div className="text-danger">{error.message}</div>}
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      Submit Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

    
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-0">
                <iframe
                  title="Our Location - Noida Sector 15"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.35495644468!2d77.31034305!3d28.58010425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce398f24cc6ef%3A0x8fe7a05f9f06b4fd!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1716549472567!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center mt-4">
          <a
            href="https://wa.me/+916204340726"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <i className="bi bi-whatsapp me-2"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </Layout>
  );
}
