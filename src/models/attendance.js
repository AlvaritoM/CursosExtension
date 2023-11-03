import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Attendance = sequelize.define(
  "attendance",
  {
    date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "attendance", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Attendance;
