import React , { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Curso de Pastelería', category: 'pasteleria' },
  { id: 2, name: 'Curso de Cocina Italiana', category: 'italiana' },
  { id: 3, name: 'Curso de Cocina Asiática', category: 'asiatica' },
  { id: 4, name: 'Curso de Cocina Vegetariana', category: 'vegetariana' },
];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        let filteredProducts = products;
        if (categoryId) {
          filteredProducts = products.filter(
            (p) => p.category === categoryId
          );
        }
        resolve(filteredProducts);
      }, 500);
    }).then((data) => setItems(data));
  }, [categoryId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Catálogo de Cursos</h2>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/">Todos</Link>
        <Link to="/category/:categoryId" style={{ marginLeft: '10px' }}>
          Pastelería
        </Link>
        <Link to="/category/:categoryId" style={{ marginLeft: '10px' }}>
          Italiana
        </Link>
        <Link to="/category/:categoryId" style={{ marginLeft: '10px' }}>
          Asiática
        </Link>
        <Link to="/category/:categoryId" style={{ marginLeft: '10px' }}>
          Vegetariana/Vegana
        </Link>
      </div>
      <ul>
        {items.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;