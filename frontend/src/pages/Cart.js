import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!cart.length) return <div className="p-4">Your cart is empty.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item._id} className="flex justify-between mb-2">
            <span>{item.name} - ${item.price}</span>
            <button 
              onClick={() => removeFromCart(item._id)} 
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">Total: ${total}</p>
      <div className="mt-4 flex gap-2">
        <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded">Checkout</Link>
        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
