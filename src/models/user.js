import { Sequelize } from "sequelize";

const User = sequelize.define(
  "User",
  {
    nombre: {
      type: String,
      required: true,
      maxLenght: 45,
    },
    apellido: {
      type: String,
      required: true,
      maxLength: 45,
    },
  },
  {
    schema: "public", // Nombre del esquema en PostgreSQL
  }
);
export default User;
