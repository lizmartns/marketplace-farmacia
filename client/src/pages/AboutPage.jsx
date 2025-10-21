// src/pages/AboutPage.jsx
import React from 'react';
import MainLayout from '../shared/layouts/MainLayout';

// Estilos podem ser colocados em um arquivo .css ou diretamente aqui para simplicidade
const pageStyles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto', // Centraliza o container de conteúdo
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#111827',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#374151',
    marginBottom: '1rem',
  }
};

const AboutPage = () => {
  return (
    <MainLayout>
      <div style={pageStyles.container}>
        <h1 style={pageStyles.title}>Sobre o MediMarket</h1>
        <p style={pageStyles.paragraph}>
          Bem-vindo ao MediMarket, a sua farmácia digital de confiança. Nossa missão é simplificar o acesso a medicamentos e produtos de saúde, oferecendo uma plataforma segura, rápida e conveniente para todas as suas necessidades.
        </p>
        <p style={pageStyles.paragraph}>
          Fundado em 2025, o MediMarket nasceu da visão de que cuidar da saúde pode ser mais fácil. Combinamos tecnologia de ponta com um atendimento humano e personalizado, permitindo que você compre seus produtos, tire dúvidas com farmacêuticos e gerencie suas assinaturas, tudo isso no conforto da sua casa.
        </p>
        <p style={pageStyles.paragraph}>
          Nossa equipe é formada por profissionais apaixonados por saúde e inovação, dedicados a proporcionar a melhor experiência para você e sua família.
        </p>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
