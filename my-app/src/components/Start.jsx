import React from 'react';
import startImage from '../Images/Start.png';
const Start = () => {
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleSignup = () => {
    // Logic for handling signup
  };
  return (
    <div className=" hover:bg-startImage focus:bg-startImage  bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center " 
    style={{ backgroundImage: `url(${startImage})` }}>
      <div className="text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Diary App</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6">Start documenting your life's moments.</p>
            <button
            className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 text-lg sm:text-xl lg:text-2xl"
            onClick={handleSignup}
            >
            Start Your Free Journal Now
            </button>
      </div>
      
      

      <div className="absolute top-11 right-9 mt-4 mr-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2 text-sm sm:text-base lg:text-lg"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="px-4 py-2 text-blue-500 bg-transparent border border-blue-500 rounded hover:text-white hover:bg-blue-500 text-sm sm:text-base lg:text-lg"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Start;

