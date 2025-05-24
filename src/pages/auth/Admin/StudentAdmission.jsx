import React, { useState } from "react";
import Layout from "../../../Layouts/Layout"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export default function StudentAdmission() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); 

  const [record, setRecord] = useState({
    name: "",
    father: "",
    mother: "",
    number: "",
    address: "",
    selectboard10th: "",
    percentage10th: "",
    stream12: "",
    faoccuption: "",
    adcourse: "",
    percentage12th: "",
    adharnumber: "",
    birth: "",
    email: "",
    password: "",
  });

  // Form Validation
  function Validation(data) {
    let newErrors = {}; 

    if (data.name.trim() === "") {
      newErrors.name = "Name is required.";
    }
    if (data.father.trim() === "") {
      newErrors.father = "Father's name is required.";
    }
    if (data.email.trim() === "") {
      newErrors.email = "Email is required.";
    }
    if (data.password.trim() === "") {
      newErrors.password = "Password is required.";
    }
    if (data.number.trim() === "") {
      newErrors.number = "Mobile number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length < 1;
  }

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
   
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Validation(record)) {
      toast.error("Please fill all mandatory fields."); 
      return;
    }

    try {
    // eslint-disable-next-line no-undef
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/add-student`, record);
      toast.success("New Admission Added", { autoClose: 1000 });

     
      setRecord({
        name: "",
        father: "",
        mother: "",
        number: "",
        address: "",
        selectboard10th: "",
        percentage10th: "",
        stream12: "",
        faoccuption: "",
        adcourse: "",
        percentage12th: "",
        adharnumber: "",
        birth: "",
        email: "",
        password: "",
      });
      setErrors({}); 

      setTimeout(() => {
        navigate("/admissionall");
      }, 1000);
    } catch (error) {
      console.error("Admission Error:", error); 
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
  
    <Layout>
   
      <div className="d-flex justify-content-center align-items-center py-4"> 
        <div className="card shadow-lg" style={{ maxWidth: '800px', width: '100%' }}>
         
          <div className="card-header text-white d-flex align-items-center" style={{ backgroundColor: '#6a0dad', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}>
            <span className="me-2 fs-4">📝</span>
            <h1 className="h4 mb-0 mt-4">Student Admission Form</h1> 
          </div>

     
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="row g-3"> 
               
                <div className="col-md-6">
                  <label htmlFor="fullName" className="form-label visually-hidden">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="fullName"
                    name="name"
                    placeholder="Full Name*"
                    value={record.name}
                    onChange={handleChange}
                    required 
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="fatherName" className="form-label visually-hidden">Father's Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.father ? 'is-invalid' : ''}`}
                    id="fatherName"
                    name="father"
                    placeholder="Father's Name*"
                    value={record.father}
                    onChange={handleChange}
                    required
                  />
                  {errors.father && <div className="invalid-feedback">{errors.father}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="motherName" className="form-label visually-hidden">Mother's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="motherName"
                    name="mother"
                    placeholder="Mother's Name"
                    value={record.mother}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="mobileNumber" className="form-label visually-hidden">Mobile Number</label>
                  <input
                    type="number"
                    className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                    id="mobileNumber"
                    name="number"
                    placeholder="Mobile Number*"
                    value={record.number}
                    onChange={handleChange}
                    required
                  />
                  {errors.number && <div className="invalid-feedback">{errors.number}</div>}
                </div>

                <div className="col-12"> 
                  <label htmlFor="address" className="form-label visually-hidden">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={record.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="tenthPercentage" className="form-label visually-hidden">10th Percentage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tenthPercentage"
                    name="percentage10th"
                    placeholder="10th Percentage"
                    value={record.percentage10th}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="twelfthPercentage" className="form-label visually-hidden">12th Percentage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="twelfthPercentage"
                    name="percentage12th"
                    placeholder="12th Percentage"
                    value={record.percentage12th}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="aadharNumber" className="form-label visually-hidden">Aadhar Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="aadharNumber"
                    name="adharnumber"
                    placeholder="Aadhar Number"
                    value={record.adharnumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="dateOfBirth" className="form-label visually-hidden">Date of Birth</label>
                  <input
                    type="date" 
                    className="form-control"
                    id="dateOfBirth"
                    name="birth"
                    placeholder="Date of Birth"
                    value={record.birth}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label visually-hidden">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    placeholder="Email*"
                    value={record.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="password" className="form-label visually-hidden">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    placeholder="Password*"
                    value={record.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

              
                <div className="col-md-6">
                  <label htmlFor="select10thBoard" className="form-label visually-hidden">Select 10th Board</label>
                  <select
                    className="form-select"
                    id="select10thBoard"
                    name="selectboard10th"
                    value={record.selectboard10th}
                    onChange={handleChange}
                  >
                    <option value="">Select 10th Board</option>
                    <option value="bseb">BSEB</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                    <option value="upboard">UP BOARD</option>
                    <option value="jkbose">JKBOSE</option>
                    <option value="rbse">RBSE</option>
                    <option value="mpbse">MPBSE</option>
                    <option value="wbbse">WBBSE</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="select12thStream" className="form-label visually-hidden">Select 12th Stream</label>
                  <select
                    className="form-select"
                    id="select12thStream"
                    name="stream12"
                    value={record.stream12}
                    onChange={handleChange}
                  >
                    <option value="">Select 12th Stream</option>
                    <option value="science">Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="fathersOccupation" className="form-label visually-hidden">Father's Occupation</label>
                  <select
                    className="form-select"
                    id="fathersOccupation"
                    name="faoccuption"
                    value={record.faoccuption}
                    onChange={handleChange}
                  >
                    <option value="">Father's Occupation</option>
                    <option value="farmer">Farmer</option>
                    <option value="government">Government Job</option>
                    <option value="private">Private Job</option>
                    <option value="business">Businessman</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="selectCourse" className="form-label visually-hidden">Select Course</label>
                  <select
                    className="form-select"
                    id="selectCourse"
                    name="adcourse"
                    value={record.adcourse}
                    onChange={handleChange}
                  >
                    <option value="">Select Course</option>
                    <option value="bba">BBA</option>
                    <option value="bca">BCA</option>
                    <option value="btech">B.TECH</option>
                    <option value="mca">MCA</option>
                    <option value="ma">MA</option>
                    <option value="mba">MBA</option>
                    <option value="phd">P.H.D</option>
                  </select>
                </div>
              </div> 

              {/* Submit Button */}
              <div className="d-grid gap-2 col-6 mx-auto mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ background: 'linear-gradient(to right, #8a2be2, #6a0dad)', border: 'none', borderRadius: '30px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
                >
                  Submit Admission
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}