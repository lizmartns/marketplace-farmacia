// src/pages/HomePage.jsx
import React from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import './HomePage.css'; // Criaremos um CSS para estilizar a home
import ProductCard from '../entities/product/components/ProductCard'; // Reutilizaremos este componente

// Dados de exemplo (mock). No futuro, virão da API.
const featuredProducts = [
  { id: 1, name: 'Paracetamol 750mg', price: 'R$ 15,90', imageUrl: 'https://via.placeholder.com/300x300.png?text=Paracetamol' },
  { id: 2, name: 'Vitamina C 1g', price: 'R$ 29,99', imageUrl: 'https://via.placeholder.com/300x300.png?text=Vitamina+C' },
  { id: 3, name: 'Protetor Solar FPS 50', price: 'R$ 45,50', imageUrl: 'https://via.placeholder.com/300x300.png?text=Protetor+Solar' },
  { id: 4, name: 'Shampoo Anticaspa', price: 'R$ 22,75', imageUrl: 'https://via.placeholder.com/300x300.png?text=Shampoo' },
];

const HomePage = ( ) => {
  return (
    <MainLayout>
      <div className="home-container">
        {/* 1. Banner Principal */}
        <section className="hero-banner">
          <div className="hero-content">
            <h1>Sua saúde e bem-estar em primeiro lugar</h1>
            <p>Encontre tudo o que você precisa, do medicamento ao cuidado pessoal, com entrega rápida e segura.</p>
            <button className="hero-button">Ver Ofertas</button>
          </div>
        </section>

        {/* 2. Seção de Produtos em Destaque */}
        <section className="featured-products">
          <h2 className="section-title">Produtos em Destaque</h2>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
