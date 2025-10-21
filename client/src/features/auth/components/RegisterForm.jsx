// src/features/auth/components/RegisterForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'; // 1. Importe o Yup
import api from '../../../shared/api/api'; // 2. Importe nossa instância do Axios
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import './RegisterForm.css';

// 3. Crie o esquema de validação fora do componente
const registerSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais') // Valida se é igual ao campo 'password'
    .required('A confirmação de senha é obrigatória'),
});

const RegisterForm = () => {
  const [formData, setFormData] = useState({ /* ... seu estado ... */ });
  const [errors, setErrors] = useState({}); // Estado para armazenar os erros de validação
  const navigate = useNavigate(); // Hook para redirecionar o usuário

  const handleChange = (e) => { /* ... seu handleChange ... */ };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Limpa erros antigos

    try {
      // 4. Valide os dados do formulário com o esquema do Yup
      await registerSchema.validate(formData, { abortEarly: false });

      // 5. Se a validação passar, faça a chamada à API
      // (Removendo confirmPassword antes de enviar para a API)
      const { confirmPassword, ...dataToSend } = formData;
      
      console.log("Enviando para a API:", dataToSend);
      // Exemplo de chamada POST para a rota /users ou /register
      await api.post('/auth/register', dataToSend);

      alert('Cadastro realizado com sucesso!');
      navigate('/login'); // Redireciona para a página de login

    } catch (err) {
      // 6. Se a validação do Yup falhar...
      if (err instanceof yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
        console.log("Erros de validação:", validationErrors);
      } else {
        // Se for um erro da API...
        console.error("Erro da API:", err.response?.data?.message || err.message);
        alert(`Erro no cadastro: ${err.response?.data?.message || 'Tente novamente.'}`);
      }
    }
  };

  return (
    <div className="register-form-container">
      <h1 className="title">Crie sua conta</h1>
      <form onSubmit={handleSubmit}>
        {/* ... Campos de Input ... */}
        <Input
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        
        {/* Adicione a exibição de erros para todos os outros campos... */}
        <Input
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        
        <div style={{ marginTop: '1rem' }}>
          <Button type="submit" variant="primary">Cadastre-se</Button>
        </div>
      </form>
      <p className="login-link">
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
