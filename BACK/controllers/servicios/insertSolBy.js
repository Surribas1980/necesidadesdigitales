const getDB = require("../../db");
const { formatDateToDB } = require("../../helpers");

const insertSolBy = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id } = req.params;

    //Comprobamos que el servicio está en la tabla solucionar
    const [current,] = await connection.query(`SELECT id_sol FROM solucionar WHERE id_ser_sol=?`,[id]);

    if (current.length === 0) {
        const error = new Error(
            "No existe ningún sericio en la tabla solucionar con ese id_ser"
        );
        error.httpStatus = 404;
        throw error;
    }

    //Saco queryString
    const { id_usu_sol, id_ser_sol, solucionado, nomFich, comentarioSolucion, id_usu, id_ser} = req.body;

const now = new Date();


await connection.query(`UPDATE solucionar SET id_usu_sol=?, id_ser_sol=?, solucionado=?, nomFich=?, comentarioSolucion=?, fecha_solucion:? WHERE id_sol=?;`, [id_usu, id_ser, solucionado, nomFich, comentarioSolucion, formatDateToDB(now), id]);

    //Devuelto un json con los detalles de la solución
    res.send({
      status: "ok",
      data: {
        id_usu_sol,
        id_ser_sol,
        solucionado,
        comentarioSolucion,
        fecha:now,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertSolBy;