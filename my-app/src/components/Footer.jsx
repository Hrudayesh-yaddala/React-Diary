import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#a86add] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center sm:text-center text-gray-300 text-md">
        &copy; {new Date().getFullYear()} My Diary. All rights reserved.
    </p>
      </div>
    </footer>
  );
};

export default Footer;
