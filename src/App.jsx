import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/auth/Register";
import Home from "./pages/auth/Home";
import Login from "./pages/auth/Login";
import PageNotfound from "./pages/auth/PageNotfound";
import AdminAdmission from "./pages/auth/Admin/AdminAdmission";
import StudentAdmission from "./pages/auth/Admin/StudentAdmission";
import UpdateStudent from "./pages/auth/Admin/UpdateStudent";
import AdmissionAllStd from "./pages/auth/Admin/AdmissionAllStd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Layouts/Contact";
import About from "./Layouts/About";
import About2 from "./Layouts/About2";
import Bca from "./Layouts/Courses/Bca";
import Bba from "./Layouts/Courses/course/Bba";
import ThankuPage from "./Layouts/ThankuPage";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminVerifyOtp from "./pages/AdminVerifyOtp";
import AdminResetPassword from "./pages/AdminResetPassword";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankupage" element={<ThankuPage />} />
          <Route path="/about" element={<About />} /> {/* //Home  */}
          <Route path="/about2" element={<About2 />} />
          <Route path="/bca" element={<Bca />} />
          <Route path="/bba" element={<Bba />} />
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminadmission" element={<AdminAdmission />} />
          <Route path="/studentadmission" element={<StudentAdmission />} />
          <Route path="/updatestudent/:id" element={<UpdateStudent />} />
          <Route path="/admissionall" element={<AdmissionAllStd />} />
          <Route
            path="/admin-forgot-password"
            element={<AdminForgotPassword />}
          />
          <Route path="/admin/verify-otp" element={<AdminVerifyOtp />} />
          <Route
            path="/admin/reset-password"
            element={<AdminResetPassword />}
          />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
