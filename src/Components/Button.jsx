import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        className="p-2 rounded-md border-2 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
