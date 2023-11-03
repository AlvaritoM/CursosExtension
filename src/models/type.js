import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Type = sequelize.define(
  "type",
  {
    name: {
      type: DataTypes.ENUM("Externo", "Docente", "Alumno"), // Reemplaza con los valores reales de tu ENUM
    },
  },
  {
    tableName: "type", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Type;
