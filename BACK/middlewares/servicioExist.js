const getDB = require("../db");

const servicioExist = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id_ser } = req.body;

    const [result] = await connection.query(
      `
      SELECT id_ser FROM servicios WHERE id_ser=?
    `,
      [id_ser]
    );

    if (result.length === 0) {
      const error = new Error("Entrada no encontrada");
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

module.exports = servicioExist;