import React from 'react';
// import startImage from './Start.png';
import { Link } from 'react-router-dom';
const Start = () => {
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleSignup = () => {
    // Logic for handling signup
  };
  return (
    <div className=" hover:bg-startImage relative focus:bg-startImage bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center bg-[url('/mobileimg.png')] md:bg-[url('/Start.png')]">
      <div className='flex w-full md:justify-end'>
        <div className="text-center md:w-1/2 flex flex-col items-center gap-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Diary App</h1>
            <p className="text-lg sm:text-xl lg:text-3xl text-gray-700 mb-6">Start documenting your life's moments.</p>
            <button
            className="px-6 py-3 text-white w-3/4 bg-blue-500 rounded hover:bg-blue-600 text-lg sm:text-xl lg:text-2xl"
            onClick={handleSignup}
            >
            Start Your Free Journal Now
            </button>
      </div>
      </div>
      
      
      
      <div className="absolute md:top-12 right-10 mt-4 mr-10 md:mr-4 top-24">
        <Link
          className="px-4 py-2 text-white text-lg bg-blue-500 rounded hover:bg-blue-600 mr-2 sm:text-base lg:text-lg" to={"/login"}
        >
          Login
        </Link>
        <Link
          className="px-4 py-2 text-blue-500 bg-transparent border border-blue-500 rounded hover:text-white hover:bg-blue-500 text-sm sm:text-base lg:text-lg" to={"/register"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Start;

