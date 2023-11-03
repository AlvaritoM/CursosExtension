import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Cost = sequelize.define(
  "cost",
  {
    price: DataTypes.DECIMAL(10, 2),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "cost", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Cost;
