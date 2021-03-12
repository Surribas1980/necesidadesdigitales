/**
 * Duda con este end-point
 * 
 * Entiendo que se producirá cuando el usuario se introduzca, con lo que entiendo que
 * debe estar relacionado con el token, con lo que será por POST
 * Para el id, no olvidarse de 
 *  localhost:3000/users/userLogin?id_usuario=1
 * con la opcion de 'params' en postman
 */
const {
  datosServicios,
  rank,
  elServicios,
  numServSoli,
  misServes,
  misNumComentarios,
  miNumSolucionados
} = require("../../helpers");
const getDB = require("../../db");
const adminUser = async (req, res, next) => {
    let connection;
    //const {id_usuario} = req.query;
    console.log(`El id: ${req.userAuth.id}`)
  try {
    connection = await getDB();

    const [usuario] = await connection.query(`select * from usuarios where id_usu = ?;`,[req.userAuth.id]);
    const [Solucionados] = await datosServicios(1);
    const [NoSolucionados] = await datosServicios(0);
    const [ranking] = await rank();   
    const [misServicios] = await elServicios(req.userAuth.id);
 
    const [NumMisServSoli] = await numServSoli(req.userAuth.id);
    const [misServiciosNoSolucionados] = await misServes(req.userAuth.id,0);
    const [misServiciosSolucionados] = await misServes(req.userAuth.id,1);

    const [MisSolucionados] = await connection.query(`select  count(id_sol) 
    from solucionar where solucionado = 1 && id_usu_sol= ?;`, [req.userAuth.id]);
  
    const [comentSinLer] = await misNumComentarios(req.userAuth.id,"sinleer");
    const [comentSinVer] = await misNumComentarios(req.userAuth.id,"sinver");
  //const [MisSolucionados] = await miNumSolucionados(id_usuario); //No sé porque esta función me queda en espera ¿?
     
  // Devuelvo un json con las entradas
     res.send({
        datosUsuario: usuario,
        status: "ok",
        ranking:ranking,
        serviSolucionados: Solucionados,
        serviciosNoSolucionados: NoSolucionados,
        numComentariosSinver: comentSinVer,
        numComentariosSinLer: comentSinLer,
        numMisSolucionados:MisSolucionados,
        numMisSolicitados:NumMisServSoli,
        misSerNoSolucionados : misServiciosNoSolucionados,
        misSerSolucionados: misServiciosSolucionados,
        serv: misServicios,

      });

  } catch (error) {
    next(error);
  } finally{
    if(connection) connection.release();
  }
}

module.exports = adminUser;