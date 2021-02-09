const getDB = require("../../db");

const deleteUser = async (req, res, next) => {

    let connection;
    try{
        connection = await getDB();
        const {id} = req.params;
        console.log(`esto es lo que recibo: ${id}`);

        await connection.query(`DELETE FROM usuarios WHERE id_usu = ?`,[id]);
        res.send({
            status: "ok",
            message: `El usuario con id ${id} fué borrado`,
          });
    } catch(error){
        next(error);
    } finally {
        if (connection) connection.release();
    }
    
}

module.exports = deleteUser;