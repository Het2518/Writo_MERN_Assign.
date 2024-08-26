import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import OtpVerification from "./Pages/OtpVerification.jsx";
import Welcome from "./Pages/Welcome.jsx";
import NotFound from "./Pages/NotFound.jsx";
import HomePage from "./Pages/HomePage.jsx";
import PasswordReset from "./Pages/ResetPassword.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/verify-otp" element={<OtpVerification/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/reset-password" element={<PasswordReset />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default App;