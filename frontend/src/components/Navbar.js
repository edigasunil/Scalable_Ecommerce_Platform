import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-bold">E-Commerce</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/products" className="hover:text-blue-500">Products</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
        <Link to="/register" className="hover:text-blue-500">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
