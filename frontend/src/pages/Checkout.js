import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { createOrder } from '../api/orders';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!user) {
      alert('Please login first!');
      navigate('/login');
      return;
    }
    try {
      await createOrder({ products: cart }, user.token);
      alert('Order placed successfully!');
      clearCart();
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Checkout failed');
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.map(item => (
        <div key={item._id} className="flex justify-between mb-2">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${total}</p>
      <button 
        onClick={handleCheckout} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
