import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Inscription = sequelize.define(
  "inscription",
  {
    is_approved: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "inscription", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Inscription;
