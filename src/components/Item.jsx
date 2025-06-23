import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
    <div className="col-md-4 mb-4">
        <div className="card h-100">
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Precio: ${item.price}</p>
            <Link to={`/detail/${item.id}`} className="btn btn-primary mt-auto">
            Ver más
            </Link>
        </div>
        </div>
    </div>
);

export default Item;