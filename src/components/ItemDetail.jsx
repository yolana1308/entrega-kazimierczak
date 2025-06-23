import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAdd, cartCount }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        onAdd(quantity);
    };

    return (
        <div>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} style={{ width: '300px', height: 'auto' }} />
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <ItemCount stock={10} initial={1} onAdd={handleAdd} setQuantity={setQuantity} />
        <p>Total en carrito: {cartCount}</p>
        </div>
    );
};

export default ItemDetail;