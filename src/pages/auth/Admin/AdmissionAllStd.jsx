import React, { useEffect, useState } from "react";
import Layout from "../../../Layouts/Layout";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function AdmissionAllStd() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;

  const filtered = students.filter((s) =>
    s.name?.toLowerCase().includes(search.toLowerCase())
  );

  const records = filtered.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filtered.length / recordPerPage);
  const numbers = [...Array(nPage)].map((_, i) => i + 1);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/get-student`
      );
      setStudents(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch students");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/delete-student/${id}`
      );
      toast.success("Student deleted successfully", { autoClose: 1000 });
      getAllStudents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete");
    }
  };

  const getStudent = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/get-student-single/${id}`
      );
      setStudent(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch student details");
    }
  };

  return (
    <Layout>
     
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content rounded-3 shadow">
            <div
              className="modal-header"
              style={{ background: "linear-gradient(45deg, #6a11cb, #2575fc)", color: "white" }}
            >
              <h5 className="modal-title" id="exampleModalLabel">
                🧾 Student Details
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" style={{ background: "#f9f7ff" }}>
              <table className="table table-bordered">
                <tbody>
                  {[
                    { label: "Name", value: student.name },
                    { label: "Father", value: student.father },
                    { label: "Mother", value: student.mother },
                    { label: "Phone", value: student.number },
                    { label: "Address", value: student.address },
                    { label: "10th Board", value: student.selectboard10th },
                    { label: "10th %", value: student.percentage10th },
                    { label: "12th Stream", value: student.stream12 },
                    { label: "12th %", value: student.percentage12th },
                    { label: "Father's Occupation", value: student.faoccuption },
                    { label: "Course", value: student.adcourse },
                    { label: "Aadhar", value: student.adharnumber },
                    { label: "DOB", value: student.birth },
                    { label: "Email", value: student.email },
                  ].map(({ label, value }) => (
                    <tr key={label}>
                      <th style={{ width: "40%" }}>{label}</th>
                      <td>{value || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer" style={{ background: "#f9f7ff" }}>
              <button
                type="button"
                className="btn btn-secondary rounded-pill px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="container my-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div
            className="col-md-9 p-4 rounded shadow"
            style={{ background: "#fef6ff", borderLeft: "5px solid #8e44ad" }}
          >
            <h3
              className="mb-4 text-white text-center py-2 rounded"
              style={{ background: "linear-gradient(45deg, #6a11cb, #2575fc)" }}
            >
              🎓 Student Records
            </h3>

            <input
              className="form-control rounded-pill mb-3 shadow-sm"
              type="search"
              placeholder="🔍 Search by name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />

            <div className="table-responsive shadow rounded" style={{ background: "#fff5f9" }}>
              <table className="table mb-0">
                <thead style={{ background: "#f0f7ff" }}>
                  <tr>
                    <th style={{ width: "5%" }}>#</th>
                    <th>Name</th>
                    <th className="text-center" style={{ width: "20%" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="text-center py-3 text-muted">
                        No records found
                      </td>
                    </tr>
                  ) : (
                    records.map((std, i) => (
                      <tr key={std._id}>
                        <td>{firstIndex + i + 1}</td>
                        <td>{std.name}</td>
                        <td className="text-center">
                          <NavLink
                            to={`/updatestudent/${std._id}`}
                            className="btn btn-sm btn-outline-success me-2"
                            title="Edit"
                          >
                            ✏️
                          </NavLink>
                          <button
                            className="btn btn-sm btn-outline-danger me-2"
                            onClick={() => handleDelete(std._id)}
                            title="Delete"
                          >
                            🗑️
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => getStudent(std._id)}
                            title="View"
                          >
                            👁️
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {nPage > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink
                      previous
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    />
                  </PaginationItem>
                  {numbers.map((n) => (
                    <PaginationItem key={n} active={currentPage === n}>
                      <PaginationLink onClick={() => setCurrentPage(n)}>{n}</PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage === nPage}>
                    <PaginationLink
                      next
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, nPage))
                      }
                    />
                  </PaginationItem>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
