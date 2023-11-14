import express from "express";
import { getAllProduct, getAllProductStatic } from "../controllers/products.js";

const router = express.Router();

router.route("/").get(getAllProduct);
router.route("/static").get(getAllProductStatic);

export default router;
