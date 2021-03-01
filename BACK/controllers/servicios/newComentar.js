const getDB = require("../../db");
const { formatDateToDB } = require("../../helpers");

const newComentar = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

  
    const { id_ser,idConversacion,comentario } = req.body;

await connection.query(`call insertarComentarios(?, ?, ?, ?);`, [id_ser,idConversacion,req.userAuth.id, comentario]);

    //Devuelto un json con los detalles del comentario
    res.send({
      status: "ok",
      data: {
        idConversacion,
        comentario,
        id_ser,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = newComentar;