import User from "../models/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        msg: "Correo o password invalido",
      });
    }
    const isPasswordValid = await bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({
      msg: "El usuario existe",
      uid: user.id,
      name: user.first_name,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Usuario o contraseña inválido",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "Not users find",
    });
  }
};
export const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ where: { email } });
    console.log(user);
    if (user) {
      return res.status(400).json({
        msg: "Ya existe un usuario con el correo solicitado",
      });
    }
    const newUser = new User(req.body);
    console.log(newUser);
    const salt = bcrypt.genSaltSync(10);
    newUser.password = bcrypt.hashSync(password, salt);
    await newUser.save();
    res.status(201).json({
      msg: "El usuario existe",
      uid: user.id,
      name: user.first_name,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Bad request",
      error: error.message, // Opcional: puedes enviar el mensaje de error en la respuesta
    });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id; // Obtener el ID del usuario a actualizar
  const updatedData = req.body; // Obtener los datos actualizados desde el cuerpo de la solicitud

  try {
    const [updatedRowsCount] = await User.update(updatedData, {
      where: { id: userId },
    });

    if (updatedRowsCount > 0) {
      res.status(200).json({ msg: "Usuario actualizado correctamente" });
    } else {
      res.status(404).json({ msg: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id; // Obtener el ID del usuario a eliminar

  try {
    const deletedRowCount = await User.destroy({
      where: { id: userId },
    });

    if (deletedRowCount > 0) {
      res.status(200).json({ msg: "Usuario eliminado correctamente" });
    } else {
      res.status(404).json({ msg: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};
