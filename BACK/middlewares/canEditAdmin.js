const getDB = require("../db");

const canDelete = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id } = req.params;
    console.log(`en canEdit ${id}`)
    // Seleccionar la entrada de la base de datos para saber quien la creó
    const [usuario] = await connection.query(
      `
      SELECT id_usu
      FROM usuarios
      WHERE id_usu=?;
    `,
      [id]
    );
      console.log(`${usuario[0]['id_usu']} = id_usu...${req.userAuth.id}`)
   
    const condicion =  usuario[0].id_usu !== req.userAuth.id || req.userAuth.rol !== "admin";
    
    if (condicion) {
      const error = new Error("No tienes permisos para modificar el admin");
      error.httpStatus = 401;
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = canDelete;