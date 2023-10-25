import Sequelize from "sequelize";
import sequelize from "../database/database.js";

const USER = sequelize.define(
  "User",
  {
    name: {
      type: Sequelize.STRING, // Debes usar Sequelize.STRING en lugar de String
      allowNull: false, // Debes usar allowNull en lugar de required
      maxLength: 45, // Debes usar maxLength en lugar de maxLenght
    },
    surename: {
      type: Sequelize.STRING,
      allowNull: false,
      maxLength: 45,
    },
  },
  {
    schema: "public", // Nombre del esquema en PostgreSQL
    timestamps: true,
  }
);

export default USER;
