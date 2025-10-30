// src/shared/layouts/MainLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usaremos Link para a navegação
import './MainLayout.css'; // Criaremos um CSS para ele

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="logo">
          <Link to="/">MediMarket</Link> {/* Link para a Home */}
        </div>
        <nav>
          <Link to="/about">Sobre</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/products">Produtos</Link> 
          <Link to="/contact">Contato</Link>
          <Link to="/login" className="login-button">Entrar</Link>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      {/* Aqui você poderia adicionar um rodapé no futuro */}
      {/* <footer className="main-footer">© 2025 MediMarket</footer> */}
    </div>
  );
};

export default MainLayout;
