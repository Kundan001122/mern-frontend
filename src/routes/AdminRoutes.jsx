import { Routes, Route } from 'react-router-dom';
import AdminForgotPassword from '../pages/AdminForgotPassword';
import AdminVerifyOtp from '../pages/AdminVerifyOtp';
import AdminResetPassword from '../pages/AdminResetPassword';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/verify-otp" element={<AdminVerifyOtp />} />
      <Route path="/admin/reset-password" element={<AdminResetPassword />} />
    </Routes>
  );
}
