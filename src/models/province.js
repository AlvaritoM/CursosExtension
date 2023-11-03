import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Province = sequelize.define(
  "province",
  {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "province", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Province;
