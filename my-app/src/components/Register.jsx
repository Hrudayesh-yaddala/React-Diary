import React, { useState } from 'react';
import axios from 'axios';
import bgImage from '../Images/bgimage.jpg';
import backImage from '../Images/background.jpg';
// import { set } from 'mongoose';

const Register = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // });
  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("");
  // const[email,setEmail]=useState("");
  // const[password,setPassword]=useState("");
  // const[confirmPassword,setConfirmPassword]=useState("");

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
    // http://localhost:5173/register
    axios.post('http://localhost:5173/register',{firstName,lastName,email,password,confirmPassword})
      .then(result=> console.log(result))
      .catch(err=>console.log(err))
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch('http://localhost:5173/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err));
  // };


  return (
    <div className="p-4 hover:bg-startImage focus:bg-backImage  bg-cover bg-center bg-no-repeat flex-grow"
    style={{ backgroundImage: `url(${backImage})` }}>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6">Welcome to e-diary! <br/>Let's create your free account.</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          name="firstName"
          // value={firstName}
           value={formData.firstName}
          onChange={handleChange}
          // onChange={(e)=>setFirstName(e.target.value)}
          placeholder="First Name"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <input
          type="text"
          name="lastName"
          // value={lastName}
          // value={formData.lastName}
          onChange={handleChange}
          // onChange={(e)=>setLastName(e.target.value)}
          placeholder="Last Name"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <input
          type="email"
          name="email"
          // value={email}
          value={formData.email}
          onChange={handleChange}
          // onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email Address"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <input
          type="password"
          name="password"
          // value={password}
          value={formData.password}
          onChange={handleChange}
          // onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          // value={confirmPassword}
          value={formData.password}
          onChange={handleChange}
          // onChange={(e)=>setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96 hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
      <p className="text-center">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a></p>
    </div>
  );
};

export default Register;
