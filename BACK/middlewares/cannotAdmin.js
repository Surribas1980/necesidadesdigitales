const cannotAdmin = async (req, res, next) => {
  let connection;

  try {
   
    if (req.userAuth.rol === 'admin') {
      console.log('Entra')
      const error = new Error("No tienes permisos para esta acción");
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

module.exports = cannotAdmin;