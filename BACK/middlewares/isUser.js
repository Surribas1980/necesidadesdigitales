const getDB = require("../db");
const jwt = require("jsonwebtoken");

const isUser = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();
    //const {eltitulo,explicacion} = req.body; 

    //console.log(`El titulo vacío? ${eltitulo} y ${explicacion}`); 

    const { authorization } = req.headers;
    console.log(`${authorization} ${process.env.SECRETO}`);
    
    // TODO: la cabeceira de autorización puede tener otro formato (Bearer)

    // Si no authorization está vacío devuelvo un error
    if (!authorization) {
      const error = new Error("Falta la cabecera de autorización");
      error.httpStatus = 401;
      throw error;
    }

    // Valido el token y si no es válido devuelvo un error
    let tokenInfo;
    
    try {
      tokenInfo = jwt.verify(authorization, process.env.SECRETO);
      
    } catch (e) {
      const error = new Error("El token no es válido");
      error.httpStatus = 401;
      throw error;
    }

    //Selecciono la fecha de ultima actualización de email / password del usuario
    const [result] = await connection.query(
      `
      SELECT lastAuthUpdate
      FROM usuarios
      WHERE id_usu=?
    `,
      [tokenInfo.id]
    );
    
    const lastAuthUpdate = new Date(result[0].lastAuthUpdate);
    const tokenEmissionDate = new Date(tokenInfo.iat * 1000);
    console.log(`${lastAuthUpdate} y ${tokenEmissionDate}`);
    if (tokenEmissionDate < lastAuthUpdate) {
      const error = new Error("El token no es válido");
      error.httpStatus = 401;
      throw error;
    }

    // Inyectamos en la request la información del token
    req.userAuth = tokenInfo;
    console.log(`.isUser..req.userAuth..${req.userAuth}`)
    // req.userAuth = { id: 12, role: 'normal', iat: 1608572656, exp: 1611164656 }; // por ejemplo
    //res.send({status: "ok",});
    // Continúo
    next();
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = isUser;
