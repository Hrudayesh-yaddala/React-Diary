import React, { useState } from 'react';
import bgImage from '../Images/bgimage.jpg';
import backImage from '../Images/background.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
  };

  return (
    <div className="p-4 hover:bg-startImage focus:bg-backImage  bg-cover bg-center bg-no-repeat flex-grow"
    style={{ backgroundImage: `url(${backImage})` }}>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96 hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      <p className="text-center">Dont have an account? <a href="/Register" className="text-blue-500 hover:underline">Sign-up here</a></p>
    </div>
  );
};

export default Login;


