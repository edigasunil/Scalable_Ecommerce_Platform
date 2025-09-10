import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
