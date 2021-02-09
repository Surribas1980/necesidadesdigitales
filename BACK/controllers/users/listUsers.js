const getDB = require("../../db");
const {listarDatos} = require("../../helpers");
const listUsers = async (req, res, next) => {
  let connection;

  try {

    //Saco queryString
    const { search } = req.query;
    const campos = {
      campo1: "nomUsuario_usu",
      campo2: "biografia_usu"
    };
    
    const tabla = "usuarios";
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

module.exports = listUsers;