const getDB = require("../../db");

const deleteComentar = async (req, res, next) => {

    let connection;
    try{
        connection = await getDB();

        //Comprobar si el comentario existe o no y devolver 404 si no existe
        const { id } = req.params;

        //Comprobamos que existe el comentario con ese id

        const [current,] = await connection.query(`SELECT id_co FROM comentar WHERE id_co=?`,[id]);
            
        //Si no existe devolver un 404

        if (current.length === 0) {
            const error = new Error(
                "No existe ningún comentario en la BBDD con ese id_co"
            );
            error.httpStatus = 404;
            throw error;
        }

        //Borrar el comentario de la tabla comentar
        await connection.query(`DELETE FROM comentar WHERE id_co = ?`,[id]);

        res.send({
            status: "ok",
            message: `El comentario con id_co ${id} fué borrado`,
          });
    } catch(error){
        next(error);
    } finally {
        if (connection) connection.release();
    }
    
}

module.exports = deleteComentar;