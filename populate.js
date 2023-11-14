import "dotenv/config";
import connectDB from "./db/connect.js";
import jsonProduct from "./products.json" assert { type: "json" };
import { Product } from "./models/product.js";

const start = async () => {
  connectDB(process.env.MONGO_URI);
  try {
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log("succesfully added");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
