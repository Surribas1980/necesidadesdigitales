const getDB = require("../../db");
const {listarDatos} = require("../../helpers");
const listServicios = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();
    let uno = '1';
    let results;
    //Saco queryString
    const { limite,inicioLista,alante,search1,search2 } = req.query;
    
    console.log('limite y inicioLista: ',limite,inicioLista);
    if(search1 || search2){
      //ojo, esto puede dar lugar a error si desde el front no se hace la búsquda de manera
      //correcta
        await connection.query(`call tablaLimitadaServicios(?, ?, ?);`,[limite,inicioLista,alante]);
        [results]= await connection.query(`call buscarValor(?,?);`,[search1,search2]);
       
     console.log('Estoy en if search',results);
    }else{
            if(uno === alante){
              await connection.query(`call tablaLimitadaServicios(?, ?, ?);`,[limite,inicioLista,alante]);
            }else{
              await connection.query(`call miBucle(?, ?);`,[limite,inicioLista]);
            }
            
           [results] = await connection.query(`select * from servicioslimitada;`);
            
          }
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
