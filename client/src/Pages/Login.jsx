import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import signInImage from '../assets/signin.png';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import InputField from '../Components/InputFields.jsx';
import axios from 'axios';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://writo-mern-assign.onrender.com/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            toast.success('Login successful!');
            navigate('/welcome');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/2 hidden lg:block">
                <img src={signInImage} alt="Sign In" className="object-cover h-full w-full"/>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-[#3A244A]">Feel What We Know
                            <span className="text-3xl font-bold text-[#D72638] pl-2">!</span>
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <InputField
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <InputField
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            icon={FaEye}
                            showPassword={showPassword}
                            onToggle={togglePasswordVisibility}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="flex justify-end">
                            <Link to="/reset-password" className="text-sm text-[#D72638] hover:underline pb-3">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#3A244A] text-white font-semibold rounded-md shadow-md mb-4"
                        >
                            Sign In
                        </button>

                        <Link to="/register">
                            <button
                                type="button"
                                className="w-full py-3 bg-white text-[#3A244A] font-semibold rounded-md shadow-md border border-[#3A244A]"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
