// src/pages/products/ProductListPage.jsx
import React from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import './ProductListPage.css';

// Dados de exemplo (mock)
const categories = [
  { name: 'Pain Relief', description: 'Effective pain relief solutions', imageUrl: 'https://via.placeholder.com/150x100.png?text=Pain+Relief' },
  { name: 'Allergy Relief', description: 'Combat allergies with our range', imageUrl: 'https://via.placeholder.com/150x100.png?text=Allergy' },
  { name: 'Digestive Health', description: 'Support your digestive system', imageUrl: 'https://via.placeholder.com/150x100.png?text=Digestion' },
  { name: 'Sleep Aids', description: 'Improve your sleep quality', imageUrl: 'https://via.placeholder.com/150x100.png?text=Sleep' },
  { name: 'Vitamins & Supplements', description: 'Boost your health', imageUrl: 'https://via.placeholder.com/150x100.png?text=Vitamins' },
  { name: 'First Aid', description: 'Be prepared for any minor injury', imageUrl: 'https://via.placeholder.com/150x100.png?text=First+Aid' },
];

const allProducts = Array(10 ).fill({
  name: 'Produto Exemplo',
  price: 'R$ 25,00',
  rating: '4.5 (123)',
  availability: 'Em Estoque',
});

const ProductListPage = () => {
  return (
    <MainLayout>
      <div className="product-list-container">
        <h1 className="main-title">Produtos em destaque</h1>
        
        {/* Barra de Busca */}
        <div className="search-bar-wrapper">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Seção de Categorias */}
        <section className="categories-section">
          <h2>Featured Products</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <img src={category.imageUrl} alt={category.name} />
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Todos os Produtos (Tabela) */}
        <section className="all-products-section">
          <h2>All Products</h2>
          <table className="products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td><span className="availability-badge">{product.availability}</span></td>
                  <td><button className="action-button">Ver</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProductListPage;
