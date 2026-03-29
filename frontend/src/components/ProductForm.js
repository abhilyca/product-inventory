import React, { useState } from "react";
import { addProduct } from "../api/productApi";

const ProductForm = ({ refresh }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    quantity: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(form);
    setForm({ name: "", price: "", category: "", quantity: "" });
    refresh();
  };

  return (
   <form onSubmit={handleSubmit}>
  <input
    name="name"
    placeholder="Name"
    onChange={handleChange}
    required
  />

  <input
    name="price"
    type="number"   // ✅ FIX
    placeholder="Price"
    onChange={handleChange}
    required
  />

  <input
    name="category"
    placeholder="Category"
    onChange={handleChange}
  />

  <input
    name="quantity"
    type="number"   // ✅ FIX
    placeholder="Quantity"
    onChange={handleChange}
    required
  />

  <button type="submit">Add Product</button>
</form>
  );
};

export default ProductForm;