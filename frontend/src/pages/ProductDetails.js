import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-700 mt-2">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button 
          onClick={() => addToCart(product)} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
