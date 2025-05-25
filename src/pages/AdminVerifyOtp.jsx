import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layouts/Layout';

export default function AdminVerifyOtp() {
  const [otp, setOtp] = useState('');
  const email = localStorage.getItem('adminEmail');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/verify-otp`, { email, otp });
      toast.success(res.data.message || 'OTP Verified');
      localStorage.setItem('adminOtp', otp);
      navigate('/admin/reset-password');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid OTP');
    }
  };

  return (
    <Layout>
    <div className="container p-5">
      <h2>Verify OTP</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success w-100">Verify</button>
      </form>
    </div>
    </Layout>
  );
}
