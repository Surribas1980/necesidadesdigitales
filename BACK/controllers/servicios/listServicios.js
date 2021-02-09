const getDB = require("../../db");
const {listarDatos} = require("../../helpers");
const listServicios = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    //Saco queryString
    const { search } = req.query;
    const campos = {
      campo1: "expli_ser"
    };
    const tabla = "servicios";
    const [results] = await listarDatos(tabla,campos,search)

/*
    let results;

    if (search) {
      [results] = await connection.query(
        `
            SELECT * FROM servicios
            WHERE titulo_ser LIKE ? OR expli_ser LIKE ?;
        `,
        [`%${search}%`, `%${search}%`]
      );
    } else {
      //Leo los servicios de la BBDD
      [results] = await connection.query(`
            SELECT * FROM servicios;
        `);
    }
*/
    //Devuelto un json con los servicios
    res.send({
      status: "ok",
      data: results,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = listServicios;
