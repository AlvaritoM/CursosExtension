import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Country = sequelize.define(
  "country",
  {
    id_country: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    tableName: "country", // Nombre de la tabla en la base de datos
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default Country;
