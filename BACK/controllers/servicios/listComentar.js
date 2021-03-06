const {listar, misConversaciones,misComentarios,comentariosServicio,listarDatos} = require("../../helpers");
const getDB = require("../../db");

const listComentar = async (req, res, next) => {

  let results;
  let myconversaciones;
  let mycomentarios;
  let comentariosdelServicio;
  let numservicios;
  let connection;
  let servicios;
  let comentariosRecibidos;
  let comentarConJoin;
  
  const {ids} = req.body;
  
  try {   
    connection = await getDB();
    if(ids){
      comentariosdelServicio = await comentariosServicio(ids);
      comentarConJoin = await connection.query(`call comentarConJoin(?)`,[ids]);
    }
    else{
        servicios = await connection.query(`select if(id_ser=id_ser_co,'Tiene conversacion','No tiene conversacion') as 'Nota', id_ser,titulo_ser,expli_ser from servicios left join comentar on id_ser = id_ser_co group by id_ser`);
         numservicios = await connection.query(`select count(id_ser) from servicios where puntuacion < 2.5;`);
         results = await listar();
         myconversaciones = await misConversaciones(req.userAuth.id);
         mycomentarios = await misComentarios(req.userAuth.id);
         comentariosRecibidos = await connection.query(`call comentariosRecibidos(?)`,[req.userAuth.id]);

      }
     
  
      //Devuelto un json con los servicios
    res.send({
      comentarConJoin:comentarConJoin,
      comentariosRecibidos:comentariosRecibidos,
      servicios:servicios,
      numservicios:numservicios,
      datoscomentariosServicios: comentariosdelServicio,
      datosMisComentarios: mycomentarios,
      datosMisConversaciones: myconversaciones,
      data: results,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = listComentar;