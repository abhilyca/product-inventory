import express from "express";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProducts
} from "../controllers/productController.js";

const router = express.Router();

router.get("/search", searchProducts);
router.get("/", getProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;