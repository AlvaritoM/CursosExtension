import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Speaker = sequelize.define(
  "speaker",
  {
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "speaker", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Speaker;
