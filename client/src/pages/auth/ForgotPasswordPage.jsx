// src/pages/auth/ForgotPasswordPage.jsx
import React from 'react';
import ForgotPasswordForm from '../../features/auth/components/ForgotPasswordForm';
import AuthLayout from '../../shared/layouts/AuthLayout';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
