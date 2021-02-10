const getDB = require("../../db");
const fs = require("fs").promises;
const path = require("path");
const deleteServicio = async (req, res, next) => {

    let connection;
    try{        
        connection = await getDB();

        //Comprobar si el servicio existe o no y devolver 404 si no existe
        const { id_ser } = req.params;

        //Comprobamos que existe el usuario con ese id

        const [id_a_borrar] = await connection.query(`SELECT id_ser FROM servicios WHERE id_ser=?`,[id_ser]);
            
        //Si no existe devolver un 404

        if (id_a_borrar.length === 0) {
            const error = new Error(
                "No existe ningún servicio en la BBDD con ese id_ser"
            );
            error.httpStatus = 404;
            throw error;
        }

        
      
        //Borrar los posibles ficheros (pendiente cuando tengamos la ruta)
        const ruta = `../../docs/servicios/${id_a_borrar[0]['id_ser']}`;
        const dir = path.join(__dirname,ruta);

        await fs.rmdir(dir, {recursive: true, });
        //Borrar el servicio de la tabla servicios
        await connection.query(`DELETE FROM servicios WHERE id_ser = ?`,[id_ser]);
            
        res.send({
            status: "ok",
            message: `El servicio con id  fué borrado`,
            directorio:dir
          });
    } catch(error){
        next(error);
    } finally {
        if (connection) connection.release();
    }
    
}

module.exports = deleteServicio;