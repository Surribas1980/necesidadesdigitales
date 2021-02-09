const getDB = require("../../db");

const getServicio = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // Saco el id de los parámetros de ruta
    const { id } = req.params;

    //Hago la query
    const [result] = await connection.query(
      `
        SELECT *
        FROM servicios WHERE id_ser = ?
        `,
      [id]
    );
    //Desestructuro el elemento de los resultados
    const [single] = result;

    if (!single) {
      //El elemento no existe
      const error = new Error("El servicio no existe");
      error.httpStatus = 404;
      throw error;
    }

    //Sacamos el fichero del servicio

    const [ file, ] = await connection.query(
      `SELECT nombre_fich_ser, fecha_ser_ini FROM servicios WHERE id_ser=?`,
      [id]
    );

    //Sacamos el comentario
    const [ comment, ] = await connection.query(
      `SELECT comentario, id_usu_co FROM comentar WHERE id_ser_co=?`,
      [id]
    );

    const [solucionado, ] = await connection.query(
      `SELECT solucionado FROM solucionar WHERE id_ser_sol=?`,[id]
    );

    res.send({
      status: "Ok",
      data: {
        ...single,
        file,
        comment,
        solucionado,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getServicio;
