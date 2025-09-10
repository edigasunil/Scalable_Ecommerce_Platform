import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

export const login = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, credentials);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const register = async (user) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, user);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
