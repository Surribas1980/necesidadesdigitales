const getDB = require("../../db");
const { formatDateToDB } = require("../../helpers");

const newComentar = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    //Saco queryString
    const { id_usu_co, id_ser_co, comentario , id_ser} = req.body;

const now = new Date();

const [admin] = await connection.query(
  `SELECT id_usu FROM usuarios WHERE rol=?;`,["admin"]
);

await connection.query(`INSERT INTO comentar(id_usu_co, id_ser_co, comentario, fecha) VALUES(?,?,?,?);`, [admin, id_ser, comentario, formatDateToDB(now)]);

    //Devuelto un json con los detalles del comentario
    res.send({
      status: "ok",
      data: {
        id_usu_co,
        id_ser_co,
        comentario,
        fecha:now,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = newComentar;