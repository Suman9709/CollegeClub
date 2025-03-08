import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button 
      className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
