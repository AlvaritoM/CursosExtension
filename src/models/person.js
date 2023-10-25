import Sequelize, { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Person = sequelize.define("Person", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  avatar: DataTypes.BLOB,
  is_admin: DataTypes.SMALLINT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
({
  schema: "public", // Nombre del esquema en PostgreSQL
  timestamps: true,
});

export default Person;
