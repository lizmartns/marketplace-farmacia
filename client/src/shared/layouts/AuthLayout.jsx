// src/shared/layouts/AuthLayout.jsx
import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <header className="auth-header">
        <div className="logo">MediMarket</div>
        <nav>
          <a href="/about">Sobre</a>
          <a href="/services">Serviços</a>
          <Link to="/products">Produtos</Link>
          <a href="/contact">Contato</a>
          <a href="/register" className="register-button">Cadastre-se</a>
        </nav>
      </header>
      <main className="auth-main">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;

