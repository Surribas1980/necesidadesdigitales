const getDB = require("../db");

const canDelete = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id_ser } = req.params;

    // Seleccionar la entrada de la base de datos para saber quien la creó
    const [usuario] = await connection.query(
      `
      SELECT id_usu_soli
      FROM solicitar
      WHERE id_ser_soli=?
    `,
      [id_ser]
    );

    // Comprobar que la id de usuario que la creó es la misma que la que viene en el token (o el token es de administrador)
    if (
      usuario[0].id_usu_soli !== req.userAuth.id &&
      req.userAuth.rol !== "admin"
    ) {
      const error = new Error("No tienes permisos para borrar el servicio");
      error.httpStatus = 401;
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = canDelete;