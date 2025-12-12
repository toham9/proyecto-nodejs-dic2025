import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenidos a nuestra API REST");
});

app.use("/api", authRouter);

app.use(auth);

app.get("/", auth, (req, res) => {
  res.send("API ...");
});

//const PORT = 3000;

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));