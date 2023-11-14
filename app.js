import "dotenv/config";
import "express-async-errors";
import express from "express";

const app = express();

import noteFoundMiddleWare from "./middleware/not-found.js";
import connecDB from "./db/connect.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

import productsRouter from "./routes/products.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(noteFoundMiddleWare);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = () => {
  connecDB(process.env.MONGO_URI);
  try {
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
