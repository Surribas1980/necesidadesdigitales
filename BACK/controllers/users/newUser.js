const getDB = require("../../db");
const {generateRandomString,sendMail} = require("../../helpers");

const newUser = async (req, res, next) => {
    let conexion;

    try{
        conexion = await getDB();

            // Recojo de req.body el email y la password

    
    const { mail, pwd, nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu } = req.body; 
    // Compruebo que no estén vacíos
console.log('esto es lo que trae',mail, pwd, nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu)

    if (!mail || !pwd || !nomUsuario_usu || !nom_usu || !ape1_usu || !ape2_usu) {
      const error = new Error("Faltan campos");
      error.httpStatus = 400;
      throw error;
    }
    
      // Compruebo que no exista un usuario en la base de datos con ese email

      const [existingUser] = await conexion.query(
      `
        SELECT id_usu FROM usuarios WHERE mail = ?;
      `,
        [mail]
      );

   
    if (existingUser.length > 0) {
        const error = new Error(
          "Ya hay un usuario en la base de datos con ese email"
        );
        error.httpStatus = 409;
        throw error;
      }
  
  
        
          // Creo un código de registro (contraseña temporal de un solo uso)
        const registrationCode = generateRandomString(10);
        await conexion.query(`
        INSERT INTO usuarios (lastAuthUpdate,pwd,mail,nomUsuario_usu,nom_usu,ape1_usu,ape2_usu,biografia_usu,codigoRegistro) VALUES (?,SHA2(?, 512),?,?,?,?,?,?,?);
         `,[new Date(),pwd,mail,nomUsuario_usu, nom_usu, ape1_usu, ape2_usu,biografia_usu,registrationCode]);
         const localhost = 'http://localhost:4000';
         const emailBody = `Te acabas de registrar en Servicios Digitales.
                            Pulsa en este link para verificar tu mail: ${localhost}/validar/${registrationCode}`;

        await sendMail({
            to: mail,
            subject: 'Activa tu usuario de Servicios Digitales',
            body: emailBody

        });
        

        res.send({
          status: "ok",
          message: "Usuario registrado comprueba tu email para activarlo",
        });

    } catch(error){
        next(error);
    } finally {
        if (conexion) conexion.release();
    }
}

module.exports = newUser;