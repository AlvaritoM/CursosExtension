import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import userRouter from "./src/routes/user.routes.js";
import "./src/database/database.js";
import path from "path";
// Configuracion inicial
const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Crear las rutas
app.use(
  express.static(
    path.join("/Users/alvaro/Desktop/Proyecto Final/Backend", "/public")
  )
);
app.use("/api", userRouter);
