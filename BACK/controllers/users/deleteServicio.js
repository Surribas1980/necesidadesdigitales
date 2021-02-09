const getDB = require("../../db");
const fs = require("fs").promises;
const path = require("path");
const deleteServicio = async (req, res, next) => {

    let connection;
    try{
        const ruta = '../../docs/servicios/97';
        const dir = path.join(__dirname,ruta);

    await fs.rmdir(dir, {
      recursive: true, // Cuidado que lo borra aunque tenga contenidos
    });

    console.log("El directorio fue borrado");
        /*
        connection = await getDB();

        //Comprobar si el servicio existe o no y devolver 404 si no existe
        const { id } = req.params;

        //Comprobamos que existe el usuario con ese id

        const [current,] = await connection.query(`SELECT id_ser FROM servicios WHERE id_ser=?`,[id]);
            
        //Si no existe devolver un 404

        if (current.length === 0) {
            const error = new Error(
                "No existe ningún servicio en la BBDD con ese id_ser"
            );
            error.httpStatus = 404;
            throw error;
        }

        //Seleccionar los ficheros (¿ruta?)
        const [ files, ] = await connection.query(
            `SELECT nombre_fich_ser FROM servicios WHERE id_ser=?`, [id]
        );
        console.log(files);
        //Borrar los posibles ficheros (pendiente cuando tengamos la ruta)

        //Borrar el servicio de la tabla servicios
        await connection.query(`DELETE FROM servicios WHERE id_ser = ?`,[id]);
            */
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