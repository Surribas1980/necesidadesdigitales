const getDB = require("../../db");
const {listarDatos} = require("../../helpers");
const listServicios = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();
    let uno = '1';

    //Saco queryString
    const { search,limite,inicioLista,alante } = req.query;
    
    console.log('limite y inicioLista: ',limite,inicioLista);
 
    if(uno === alante){
       await connection.query(`call tablaLimitadaServicios(?, ?, ?);`,[limite,inicioLista,alante]);
     

       console.log('alante en tablalimitada ',alante)
    }else{
       await connection.query(`call miBucle(?, ?);`,[limite,inicioLista]);
       
      console.log('alante en miBucle',alante)
    }
    
    const [results] = await connection.query(`select * from servicioslimitada;`);
    const [idMaxTemporal] = await connection.query(`select idMaxServiciosTemporal();`);
    const [idMinTemporal] = await connection.query(`select idMinServiciosTemporal();`);
    await connection.query(`call borrarTemporalServicios();`);

/*
    const campos = {
      campo1: "expli_ser"
    };
    const tabla = "servicios";
    const [results] = await listarDatos(tabla,campos,search)*/

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
