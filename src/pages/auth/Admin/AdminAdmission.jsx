import React from "react";
import Layout from "../../../Layouts/Layout";
import AdminMenu from "./AdminMenu";

export default function AdminAdmission() {
  const id = localStorage.getItem("id");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <Layout>
      <div className="container my-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <AdminMenu />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div
              className="p-4 rounded shadow"
              style={{
                background: "#fef6ff",
                borderLeft: "5px solid #8e44ad",
              }}
            >
              <h3
                className="mb-3 mt-3 text-white text-center py-2 rounded"
                style={{
                  background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                }}
              >
                🧾 Admin Personal Details
              </h3>

              <div className="mb-3 p-3 rounded" style={{ background: "#fff5f9" }}>
                <h5 className="text-muted mb-1">👤 User ID</h5>
                <p className="fs-5 fw-semibold text-dark">{id}</p>
              </div>

              <div className="mb-3 p-3 rounded" style={{ background: "#f5fff8" }}>
                <h5 className="text-muted mb-1">🙍 Name</h5>
                <p className="fs-5 fw-semibold text-dark">{name}</p>
              </div>

              <div className="mb-3 p-3 rounded" style={{ background: "#f0f7ff" }}>
                <h5 className="text-muted mb-1">📧 Email</h5>
                <p className="fs-5 fw-semibold text-dark">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
