// src/shared/components/Input.jsx
import React from 'react';
import './Input.css';

// Adicione a prop "name"
const Input = ({ label, type = 'text', placeholder, value, onChange, name }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        name={name} // Adicione o atributo name ao input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;
