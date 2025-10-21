// src/features/auth/components/ForgotPasswordForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import api from '../../../shared/api/api';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import './ForgotPasswordForm.css'; // Criaremos este CSS

// Esquema de validação para email ou telefone
const forgotPasswordSchema = yup.object().shape({
  emailOrPhone: yup.string()
    .required('Email ou número de telefone é obrigatório')
    .test('email-or-phone', 'Deve ser um email válido ou número de telefone', value => {
      // Verifica se é um email válido
      const isEmail = yup.string().email().isValidSync(value);
      // Verifica se é um número de telefone (ex: apenas dígitos, mínimo 8)
      const isPhone = /^\d{8,}$/.test(value); // Ajuste a regex para o formato de telefone esperado

      return isEmail || isPhone;
    }),
});

const ForgotPasswordForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    try {
      await forgotPasswordSchema.validate({ emailOrPhone }, { abortEarly: false });

      console.log('Solicitando código para:', emailOrPhone);
      // Chamada à API para solicitar o código de verificação
      // A rota e o payload podem variar dependendo do seu backend
      await api.post('/auth/forgot-password', { identifier: emailOrPhone });

      alert('Código de verificação enviado! Verifique seu email ou telefone.');
      // Redirecionar para uma tela de verificação de código, se houver
      navigate('/verify-code'); // Você pode criar esta tela depois

    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Erro da API:", err.response?.data?.message || err.message);
        alert(`Erro ao solicitar código: ${err.response?.data?.message || 'Tente novamente.'}`);
      }
    }
  };

  return (
    <div className="forgot-password-container">
      <h1 className="title">Esqueceu sua senha?</h1>
      <p className="description">
        Digite seu e-mail ou número de telefone e lhe enviaremos um código de verificação para redefinir sua senha.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          label=""
          name="emailOrPhone"
          placeholder="Email ou número de telefone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        {errors.emailOrPhone && <p className="error-message">{errors.emailOrPhone}</p>}

        <div style={{ marginTop: '1rem' }}>
          <Button type="submit" variant="primary">
            Enviar código de verificação
          </Button>
        </div>
      </form>

      <p className="back-to-login">
        Lembra da sua senha? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
