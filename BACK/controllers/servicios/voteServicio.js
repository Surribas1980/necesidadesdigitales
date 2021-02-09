const getDB = require("../../db");

//Estamos dando por supuesto que cada servicio sólo puede 
//tener una votación y si se vota un servicio que ya tiene una
//se sobreescribiría la antigua
const voteServicio = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // Recojo los parámetros
    const { id } = req.params;
    const { puntuacion } = req.body;

    // Limitamos la puntuación en el back sin hacerlo en SQL
    if (puntuacion < 1 || puntuacion > 5) {
      const error = new Error("La puntuacion debería ser 1,2,3,4 o 5");
      error.httpStatus = 400;
      throw error;
    } 

    const now = new Date();

    // Añado la puntuación al servicio
    //meto la fecha por si se considera que al votar una ya lo damos por cerrado
    await connection.query(
      `
      UPDATE servicios SET fecha_ser_fin=?, puntuacion=?
      WHERE id_ser=?
    `,
      [now, puntuacion, id]
    );

    res.send({
      status: "ok",
      data: {
        id_ser_soli: id,
        puntuacion: puntuacion,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = voteServicio;