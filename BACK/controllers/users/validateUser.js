const getDB = require("../../db");

const validateUser = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { registrationCode } = req.params;
    console.log(`El código de registro que viene es: ${registrationCode}`);


    // Activar el usuario y quitarle el registrationCode
    await connection.query(
      `
      UPDATE usuarios
      SET activado=true, codigoRegistro=NULL
      WHERE codigoRegistro=?;
    `,
      [registrationCode]
    );

    // Devolver una respuesta
    res.send({
      status: "ok",
      message: "Usuario validado",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = validateUser;