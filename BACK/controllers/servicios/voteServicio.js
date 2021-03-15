const getDB = require("../../db");
const {modificarDatos} = require("../../helpers");
/**
 * Estamos dando por supuesto que cada servicio sólo puede
 * tener una votación y si se vota un servicio que ya tiene una
 * se sobreescribiría la antigua. 
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const voteServicio = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Recojo los parámetros
    const { id_servicio,id_solucionador } = req.params;
    const { puntuacion } = req.body;
 

    console.log(`${puntuacion} ${id_servicio} ${id_solucionador} ${req.userAuth.id}`)
    // Limitamos la puntuación en el back sin hacerlo en SQL
    if (puntuacion < 1 || puntuacion > 5) {
      const error = new Error("La puntuacion debería ser 1,2,3,4 o 5");
      error.httpStatus = 400;
      throw error;
    } 

    // Compruebo el usuario no es el creador de la entrada
    const [current] = await connection.query(
      `
      SELECT id_usu 
      FROM usuarios
      WHERE id_usu=?
    `,
      [id_solucionador]
    );
    
    if (current[0].id_usu === req.userAuth.id) {
      const error = new Error("No puedes votar tu propia entrada");
      error.httpStatus = 403;
      throw error;
    }
 
    const now = new Date();
    

    modificarDatos("solucionar",0,id_servicio,"id_ser_sol");
    modificarDatos("solucionar",1,current[0].id_usu,"id_usu_sol");
    
    //modificarDatos("servicios",null,null,valores);
   
    // Añado la puntuación al servicio
    //meto la fecha por si se considera que al votar una ya lo damos por cerrado
    await connection.query(
      `
      UPDATE servicios SET fecha_ser_fin=?, puntuacion=?
      WHERE id_ser=?
    `,
      [now, puntuacion, id_servicio]
    );

    res.send({
      status: "ok",
      data: {
        id_ser_soli: id_servicio,
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