import User from "../models/person.js";

export const getPerson = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.status(200).json(persons);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "Not users find",
    });
  }
};

export const addPerson = async (req, res) => {
  try {
    //res.send("User added");
    console.log(req.body);
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json({
      msg: "Person added correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Bad request",
    });
  }
};

export const updatePerson = async (req, res) => {
  const personId = req.params.id; // Obtener el ID del usuario a actualizar
  const updatedData = req.body; // Obtener los datos actualizados desde el cuerpo de la solicitud

  try {
    const [updatedRowsCount] = await Person.update(updatedData, {
      where: { id: personId },
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

export const deletePerson = async (req, res) => {
  const personId = req.params.id; // Obtener el ID del usuario a eliminar

  try {
    const deletedRowCount = await Person.destroy({
      where: { id: personId },
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
