import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import InputField from '../Components/InputFields.jsx';

const OtpVerification = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://writo-mern-assign.onrender.com/api/auth/verify-otp', { email, otp });
            localStorage.setItem('token', response.data.token);
            toast.success('Email verified successfully');
            navigate('/welcome');
        } catch (error) {
            console.error('OTP verification error:', error);
            toast.error(error.response?.data?.message || 'OTP verification failed');
        }
    };

    if (!email) {
        navigate('/register');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
                <h2 className="text-3xl font-bold text-[#3A244A] mb-6">Verify OTP</h2>
                <p className="mb-4">An OTP has been sent to {email}. Please enter it below:</p>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        id="otp"
                        name="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#D72638] text-white font-semibold rounded-md shadow-md mt-4"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OtpVerification;