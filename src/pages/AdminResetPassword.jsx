import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layouts/Layout';

export default function AdminResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const email = localStorage.getItem('adminEmail');
  const otp = localStorage.getItem('adminOtp');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/reset-password`, {
        email,
        otp,
        newPassword,
      });
      toast.success(res.data.message || 'Password changed');
      localStorage.removeItem('adminEmail');
      localStorage.removeItem('adminOtp');
      navigate('/admin/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <Layout>
    <div className="container p-5">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-warning w-100">Reset Password</button>
      </form>
    </div>
    </Layout>
  );
}
