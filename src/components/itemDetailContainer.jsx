import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ItemDetail from '../components/ItemDetail';

    const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const prod = products.find((p) => p.id === parseInt(id));
        setProduct(prod);
    }, [id]);

    const handleAddToCart = (quantity) => {
        setCartCount((prev) => prev + quantity);
    };

    if (!product) return <p>Cargando...</p>;

    return (
        <div style={{ padding: '20px' }}>
        <ItemDetail product={product} onAdd={handleAddToCart} cartCount={cartCount} />
        </div>
    );
};

export default ItemDetailContainer;