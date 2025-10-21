// src/pages/auth/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../../features/auth/components/RegisterForm';
import AuthLayout from '../../shared/layouts/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
