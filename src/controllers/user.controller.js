import User from "../models/user.js";

export const getUsers = async (req, res) => {
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

export const addUsers = async (req, res) => {
  try {
    //res.send("User added");
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      msg: "User added correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Bad request",
    });
  }
};

export const updateUsers = async (req, res) => {
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
