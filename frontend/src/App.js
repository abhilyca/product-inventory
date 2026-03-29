import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">📦 Inventory System</h1>

      <ProductForm refresh={() => window.location.reload()} />
      <ProductList />
    </div>
  );
}

export default App;