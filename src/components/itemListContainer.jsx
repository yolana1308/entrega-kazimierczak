import React, { useState, useEffect } from 'react';
import { products, categories } from '../data/products';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
  const { } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(category ? products.filter(p => p.category === category) : products);
      }, 500);
    });
    fetchData.then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [category]);

  const handleFilter = (cat) => {
    setCategory(cat);
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Catálogo de Cursos</h2>
      {/* Botones de filtro */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handleFilter(null)} className="btn btn-secondary me-2">Todos</button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => handleFilter(cat)} className="btn btn-outline-primary me-2">
            {cat}
          </button>
        ))}
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;