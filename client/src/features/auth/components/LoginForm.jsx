// src/features/auth/components/LoginForm.jsx
import React, { useState } from 'react';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui virá a lógica para chamar a API
    console.log('Login com:', { email, password });
  };

  return (
    <div className="login-form-container">
      <h1 className="title">Seja bem vindo</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="Entre com seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Entre com sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgot-password" className="forgot-password-link"> {/* Atualize o link */}
          Esqueceu sua senha?
        </Link>

        <Button type="submit" variant="primary">
          Entrar
        </Button>
      </form>

      <div className="separator">Ou continue com:</div>

      <div className="social-login">
        <Button variant="secondary">Continue com Google</Button>
        <Button variant="secondary">Continue com Apple</Button>
      </div>

      <p className="signup-link">
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default LoginForm;
