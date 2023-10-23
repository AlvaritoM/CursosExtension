import User from "../models/user.js";

export const getUsers = (req, res) => {
  try {
    res.send("prueba");
  } catch (error) {
    console.log(error);
  }
};
