// src/shared/components/Button.jsx
import React from 'react';
import './Button.css';

// variant pode ser 'primary', 'secondary', 'tertiary'
const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
