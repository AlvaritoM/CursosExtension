import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Activity = sequelize.define(
  "activity",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_activity: DataTypes.DATE,
    end_activity: DataTypes.DATE,
    start_registration: DataTypes.DATE,
    end_registration: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "user", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Activity;
