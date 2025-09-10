import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
    <h3 className="mt-2 font-bold">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <Link to={`/product/${product._id}`} className="text-blue-500 mt-2 block">View</Link>
  </div>
);

export default ProductCard;
