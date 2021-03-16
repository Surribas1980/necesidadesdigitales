const getDB = require("../../db");
const listServicios = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();
    let uno = '1';
    let results;
    //Saco queryString
    const { limite,inicioLista,alante,search1,search2,mi } = req.query;
    
    if(search1 || search2){
      //ojo, esto puede dar lugar a error si desde el front no se hace la búsquda de manera
      //correcta
        await connection.query(`call tablaLimitadaServicios(?, ?, ?, ?, ?);`,[mi,req.userAuth.id,limite,inicioLista,alante]);
        [results]= await connection.query(`call buscarValor(?,?);`,[search1,search2]);
    }else{
            if(uno === alante){
              await connection.query(`call tablaLimitadaServicios(?, ?, ?, ?, ?);`,[mi,req.userAuth.id,limite,inicioLista,alante]);
            }else{
              await connection.query(`call miBucle(?, ?);`,[limite,inicioLista]);
            }
            
           [results] = await connection.query(`select * from servicioslimitada;`);
            
    }
          const [idMaxTemporal] = await connection.query(`select idMaxServiciosTemporal();`);
          const [idMinTemporal] = await connection.query(`select idMinServiciosTemporal();`);
          await connection.query(`call borrarTemporalServicios();`);
          
    //Devuelto un json con los servicios
    res.send({
      status: "ok",
      data: limite,
      inicioLista,
      resultbbdd: results,
      idMaxTemporal,
      idMinTemporal
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = listServicios;
