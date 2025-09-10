import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

export const getProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
