/**
 * Este archivo realiza lo siguiente:
 * 
 *  1) Crear una carpeta donde se guardará el/los archivo/s,
 *     esta carpeta deberá ser única y estará dentro de la carpeta creada para 
 *     el usuario 
 *  2) Guardará el/los archivos, de tal manera que no se guardará el nombre del archivo.Porque 
 *  podría ser más de uno 
 *  3) Realizará la inserción de los datos a la tabla solucitar y servicios
 *  
 * @param {body,files} req  
 *  - @body trae el nombre del servicio y el título
 *  - @files los ficheros
 * @param {req.userAuth} req.userAuth entre otras cosas recoge
 *  el @req.userAuth.id del token + fechas de inicio y fin del token
 *  
 * @param {*} res en este caso no enviamos nada al front
 * @param {*} next no tenemos ningún paso siguiente
 */

const getDB = require("../../db");
const { insertFiles } = require("../../helpers");

const insertThings = async (req, res, next)=>{
    
    let connection;   
    try {
        console.log('estoy en new Servicio: ',req.userAuth);
        /// Debería validar los datos de entrada ?¿
        connection = await getDB();
        const {eltitulo,explicacion} = req.body;
        const dato = {
            usuario:`${req.userAuth.id}`,
            titulo: `${eltitulo}`,
            explicacion:`${explicacion}`,
        }
        let ficheros;
        console.log(`${eltitulo}, ${explicacion}, ${req.userAuth.id} ${req.files}`)
        for(const elemento of Object.values(req.files)){
            ficheros = elemento;
        }
        
        
        await connection.query(`call insertarServicio(?,?,?,?)`,[req.userAuth.id,dato.explicacion,new Date(),dato.titulo]);
        const [idServicio] = await connection.query(`SELECT id_ser FROM servicios WHERE titulo_ser = ? AND expli_ser = ?`,[eltitulo,explicacion]);

        dato.carpeta = `docs/servicios/${idServicio[0]['id_ser']}`;
        
        insertFiles(ficheros,dato);
        //console.log(`el id del objeto: ${dato.idSer}`)
        res.send({
            status:"ok",
            salida: dato
        });

    } catch (error) {
        next(error);
    }finally{
        if (connection) connection.release();
    }
};

module.exports = insertThings;