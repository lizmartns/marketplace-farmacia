// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AboutPage from './pages/AboutPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/products/ProductListPage';
import './app/styles/global.css';

function App() {
  return (
    <Routes>
      {/* Rota para a página de Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rota para a página de Cadastro */}
      <Route path="/register" element={<RegisterPage />} />

      {/* Nova rota */}
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Rotas Públicas */}
      <Route path="/about" element={<AboutPage />} /> 

      <Route path="/products" element={<ProductListPage />} /> {/* 2. Adicione a rota */}

      <Route path="/contact" element={<ContactPage />} /> {/* 2. Adicione a nova rota */}
      
      {/* Rota para a Home (eventualmente será uma rota protegida) */}
      <Route path="/" element={<HomePage />} />

      {/* Adicione outras rotas aqui no futuro */}
      <Route path="/" element={<HomePage />} /> {/* Agora usa a página real */}
    </Routes>
  );
}

export default App;
