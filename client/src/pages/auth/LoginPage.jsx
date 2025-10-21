// src/pages/auth/LoginPage.jsx
import React from 'react';
import LoginForm from '../../features/auth/components/LoginForm';
import AuthLayout from '../../shared/layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
