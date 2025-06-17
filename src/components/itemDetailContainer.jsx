import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Curso de Pastelería',
        description: 'Aprende a hacer pasteles.',
        price: 50,
    },
    {
        id: 2,
        name: 'Curso de Cocina Italiana',
        description: 'Disfruta de pasta y pizza.',
        price: 70,
    },
    {
        id: 3,
        name: 'Curso de Cocina Asiática',
        description: 'Sabores auténticos de Asia.',
        price: 60,
    },
    {
        id: 4,
        name: 'Curso de Cocina Vegana',
        description: 'Recetas saludables vegetarianas y veganas.',
        price: 55,
    },
];

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Simula carga asincrónica
        new Promise((resolve) => {
        setTimeout(() => {
            const prod = products.find((p) => p.id === parseInt(productId));
            resolve(prod);
        }, 500);
        }).then((data) => setProduct(data));
    }, [productId]);

    const handleAddToCart = () => {
        setCartCount((prev) => prev + quantity);
    };

    if (!product) return <p>Cargando...</p>;

    return (
        <div style={{ padding: '20px' }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price},00</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span style={{ margin: '0 10px' }}>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <p>Total en carrito: {cartCount}</p>
        </div>
    );
};

export default ItemDetailContainer;