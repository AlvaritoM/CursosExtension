import User from "../models/user.js";

export const login = async (req, res) => {
  try {
    const { mail, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Correo o password invalido",
      });
    }
    res.status(200).json({
      msg: "El usuario existe",
      uid: user._id,
      name: user.user,
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
    console.log(req.body);
    const newUser = await User.create(req.body); // Utiliza el método create() en lugar de new Person()
    res.status(201).json({
      msg: "User added correctly",
      data: newUser, // Opcional: puedes enviar los datos de la persona creada en la respuesta
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
