import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct, searchProducts } from "../api/productApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  // Search product
  const handleSearch = async () => {
    try {
      if (!search) {
        return fetchProducts(); // reset
      }

      const res = await searchProducts(search);
      setProducts(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div>
      <h2>Products</h2>

      {/* 🔍 Search */}
      <input
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* 📦 Product List */}
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <p>Category: {p.category}</p>
            <p>Qty: {p.quantity}</p>

            <button onClick={() => handleDelete(p.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;