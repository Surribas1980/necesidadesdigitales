const getDB = require("../../db");
const {listarDatos} = require("../../helpers");
const listComentar = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    //Saco queryString
    const { search } = req.query;
  const campos = {
      campo1: "id_usu_co",
      campo2: "comentario"
    };
    
    const tabla = "comentar";
    const [results] = await listarDatos(tabla,campos,search);

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

module.exports = listComentar;