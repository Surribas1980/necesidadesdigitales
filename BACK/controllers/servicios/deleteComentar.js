const getDB = require("../../db");

const deleteComentar = async (req, res, next) => {

    let connection;
    try{
        connection = await getDB();

        //Comprobar si el comentario existe o no y devolver 404 si no existe
        const { id } = req.params;

    
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