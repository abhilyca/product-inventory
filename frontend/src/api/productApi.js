import axios from "axios";

const BASE_URL = "http://localhost:5000/api/products";

export const getProducts = () => axios.get(BASE_URL);
export const addProduct = (data) => axios.post(BASE_URL, data);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateProduct = (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);
export const searchProducts = (q) =>
  axios.get(`${BASE_URL}/search?q=${q}`);