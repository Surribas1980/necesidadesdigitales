const getDB = require("../db");

const userExists = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id } = req.params;

    const [result] = await connection.query(
      `
      SELECT id FROM users WHERE id=?
    `,
      [id]
    );

    if (result.length === 0) {
      const error = new Error("Usuario no encontrado");
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