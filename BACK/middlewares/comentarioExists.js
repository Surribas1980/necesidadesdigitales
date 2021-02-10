const getDB = require("../db");

const userExists = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id } = req.params;

    const [result] = await connection.query(
      `
      SELECT id_co FROM comentar WHERE id_co=?
    `,
      [id]
    );

    if (result.length === 0) {
      const error = new Error("Comentario no encontrado");
      error.httpStatus = 404;
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = userExists;