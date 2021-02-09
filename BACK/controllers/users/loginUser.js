const jwt = require("jsonwebtoken");
const getDB = require("../../db");

const loginUser = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // Recoger el email y password de req.body
    const { mail, pwd } = req.body;

    // Si email o password están vacíos dar un error
    if (!mail || !pwd) {
      const error = new Error("Faltan campos");
      error.httpStatus = 400;
      throw error;
    }

    // Seleccionar el usuario de la base de datos con ese email y password
    const [user] = await connection.query(
      `
      SELECT id_usu, rol, activado
      FROM usuarios
      WHERE mail=? AND pwd=SHA2(?, 512);
    `,
      [mail, pwd]
    );
console.log(`user length: ${user.length}`)
    // Si no existe asumimos que el email o la pass son incorrectas y damos un error
    if (user.length === 0) {
      const error = new Error("El email o la password son incorrectos");
      error.httpStatus = 401;
      throw error;
    }

    // Si existe pero no está activo avisamos que está pendiente de activar
    if (!user[0].activado) {
      const error = new Error(
        "El usuario existe pero está pendiente de validar. Comprueba tu email."
      );
      error.httpStatus = 401;
      throw error;
    }

    // Asumimos que el login fue correcto

    // Creo el objecto de información que irá en el token
    const info = {
      id: user[0].id_usu,
      rol: user[0].rol,
    };

    const token = jwt.sign(info, process.env.SECRETO, {
      expiresIn: "1d",
    });
    console.log(`Estoy en login ${token}`)
    res.send({
      status: "ok",
      data: {
        token,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = loginUser;