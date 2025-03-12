import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button 
      className="mt-2 px-3 py-1 bg-red-800 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
