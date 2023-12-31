import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const City = sequelize.define(
  "city",
  {
    name: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "city", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default City;
