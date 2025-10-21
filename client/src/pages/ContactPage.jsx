// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import Input from '../shared/components/Input'; // Reutilizaremos nosso componente de Input
import Button from '../shared/components/Button'; // E o nosso componente de Botão

// Estilos para a página (podem ser movidos para um arquivo .css se preferir)
const pageStyles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
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
    marginBottom: '2rem',
  },
  formContainer: {
    marginTop: '2rem',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontFamily: 'inherit',
    minHeight: '120px',
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#333',
  }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui viria a lógica para enviar o email ou salvar a mensagem no backend
    console.log('Mensagem enviada:', formData);
    alert('Obrigado pelo seu contato! Responderemos em breve.');
    // Limpa o formulário
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <MainLayout>
      <div style={pageStyles.container}>
        <h1 style={pageStyles.title}>Entre em Contato</h1>
        <p style={pageStyles.paragraph}>
          Tem alguma dúvida, sugestão ou precisa de ajuda? Preencha o formulário abaixo ou utilize um de nossos canais de atendimento. Nossa equipe está pronta para te atender.
        </p>

        {/* Informações de Contato */}
        <p style={pageStyles.paragraph}>
          <strong>Email:</strong> contato@medimarket.com   

          <strong>Telefone:</strong> (11) 99999-8888
        </p>

        {/* Formulário de Contato */}
        <div style={pageStyles.formContainer}>
          <form onSubmit={handleSubmit}>
            <Input
              label="Seu Nome"
              name="name"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Seu Email"
              name="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
            <div>
              <label style={pageStyles.label}>Sua Mensagem</label>
              <textarea
                name="message"
                style={pageStyles.textarea}
                placeholder="Escreva sua mensagem aqui..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
