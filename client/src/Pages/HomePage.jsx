import React from 'react';
import {Link} from 'react-router-dom';
import signInImage from '../assets/signin.png';
import signUpImage from '../assets/signup.jpg';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our App</h1>
                <div className="flex items-center gap-4 md:flex-row flex-col">
                    <Link to="/login"
                          className=" h-fit w-fit bg-white rounded-full p-4 transition duration-300 ease-in-out transform hover:scale-105">
                        <img src={signInImage} alt="Sign In" className="w-full h-full object-cover"/>
                    </Link>
                    <Link to="/register"
                          className="w-fit h-fit bg-white rounded-full p-4 transition duration-300 ease-in-out transform hover:scale-105">
                        <img src={signUpImage} alt="Sign Up" className="w-full h-full object-cover"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
