import React from 'react';

const CartWidget = ({ count }) => {
    return (
        <div style={{ cursor: 'pointer', position: 'relative' }}>
        <span style={{ fontSize: '24px' }}>🛒</span>
        {count > 0 && (
            <span
            style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'gray',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
            }}
            >
            {count}
            </span>
        )}
        </div>
    );
    };

export default CartWidget;