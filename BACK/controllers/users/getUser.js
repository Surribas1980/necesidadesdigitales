const getDB = require("../../db");

const getUser = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // Saco el id de los parámetros de ruta
    const { id } = req.params;

    //Hago la query
    const [result] = await connection.query(
      `
        SELECT *
        FROM usuarios WHERE id_usu = ?
        `,
      [id]
    );
    //Desestructuro el elemento de los resultados
    const [single] = result;

    if (!single) {
      //El elemento no existe
      const error = new Error("El usuario no existe");
      error.httpStatus = 404;
      throw error;
    }

    //Sacamos los comentarios del usuario
    const [ comment, ] = await connection.query(
      `SELECT * FROM comentar WHERE id_usu_co=?`,
      [id]
    );

    res.send({
      status: "Ok",
      data: {
        single,
        comment,},
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getUser;