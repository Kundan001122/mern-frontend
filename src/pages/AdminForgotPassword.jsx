import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layouts/Layout';

export default function AdminForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/forgot-password`, { email });
      toast.success(res.data.message || 'OTP sent');
      localStorage.setItem('adminEmail', email);
      navigate('/admin/verify-otp');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Layout>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow border-0 p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h4
          className="text-center text-white py-3 mb-4 rounded"
          style={{
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            fontWeight: 'bold',
          }}
        >
          📧 Admin Forgot Password
        </h4>

        <form onSubmit={handleSendOtp}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control rounded-pill px-3 py-2 border-primary"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill"
            style={{
              background: 'linear-gradient(to right, #6a11cb, #2575fc)',
              border: 'none',
            }}
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
    </Layout>
    
  );
}
