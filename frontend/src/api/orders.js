import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createOrder = async (orderData, token) => {
  const res = await axios.post(`${API_URL}/orders`, orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getOrders = async (token) => {
  const res = await axios.get(`${API_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
