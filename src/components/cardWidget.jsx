import React, { useState } from 'react';
import CartWidget from 'react'

const CartWidget = ({ count }) => {
    return (
        <div style={{ cursor: 'pointer', position: 'relative' }}>
        <span style={{ fontSize: 'px' }}>🛒</span>
        {count > 0 && (
            <span
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'gray',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '10rem',
            }}
            >
            {count}
            </span>
        )}
        </div>
    );
};

export default CartWidget;