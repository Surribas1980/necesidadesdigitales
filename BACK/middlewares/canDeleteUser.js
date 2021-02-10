const getDB = require("../db");

const canDelete = async (req, res, next) => {
  let connection;

  try {
 
    // Comprobar que la id de usuario que la creó es la misma que la que viene en el token (o el token es de administrador)
    if (req.userAuth.rol !== "admin") {
      const error = new Error("No tienes permisos para borrar esta entrada");
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