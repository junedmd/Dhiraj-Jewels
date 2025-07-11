import express from "express";
import { postProduct, getProduct, putProduct } from '../controllers/Product.js';

import upload from '../utils/multer.js'; 
const router = express.Router();

router.post("/products", upload.single("image"), postProduct);
router.get("/products", getProduct);
router.put('/products/:id', upload.single("image"), putProduct);


export default router;