const getDB = require("../../db");


const newComentar = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

  
    const { id_ser,idComentario,comentario } = req.body;
console.log('datos en newComentar',id_ser,idComentario,comentario);
await connection.query(`call insertarComentarios(?,?,?,?);`,[id_ser,idComentario,req.userAuth.id,comentario]);

    //Devuelto un json con los detalles del comentario
    res.send({
      status: "ok",
      data: {
        idComentario,
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