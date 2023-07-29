import React from 'react';

const DropDown = () => {
  const dropDownStyle = {
    position: 'absolute',
    top: '4.5rem',
    right: '1.5rem',
    width: '120px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '1px solid gray',
  };

  const arrowStyle = {
    content: '',
    position: 'absolute',
    top: '-0.7rem',
    right: '1.1rem',
    width: '20px',
    height: '20px',
    transform: 'rotate(45deg)',
    backgroundColor: 'white',
    borderLeft: '1px solid gray',
    borderTop: '1px solid gray',
  };

  return (
    <div style={dropDownStyle} className="flex flex-col">
      <div style={arrowStyle}></div>
      <ul className="flex flex-col gap-4">
        <li>Account</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default DropDown;
