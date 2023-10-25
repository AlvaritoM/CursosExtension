import Sequelize from "sequelize";
import "dotenv/config";

//const Sequelize = require("sequelize");

// Configuración de Sequelize a partir de las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito.");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

export default sequelize;
// Define modelos y realiza otras configuraciones de Sequelize aquí...
