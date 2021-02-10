const getDB = require("../../db");
const {generateRandomString,sendMail} = require("../../helpers");
const {SHA512} = require("sha2"); 
/**
 * Esta función trabaja para establecer el admin, para ello me surgieron dudas:
 * 
 *    a) Trabajar con un usuario por defecto introducido de manera manual o previamente con una instrucciónn) como "admin" inicial con valores vacíos
 *    b) O un "id" único con el que trabajar y modificar.
 *    c) O partir de la base que la primera vez que se abre la plataforma será por el administrador de la plataforma
 *       lo que implicaría realizarlo como normal y viendo este inicialmente todo. Este restringiría posteriormente ciertos permisos
 *    d) O cualquier otra que ahora mismo no se me ocurre
 * 
 * Para establecer un criterio inicial voy a partir con la opción "a".
 * 
 *                                  
 * 
 *  
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const updateAmin = async (req, res, next) => {

    let conexion;

    try{
        conexion = await getDB();

            // Recojo de req.body el email y la password

    
    const { mail, pwd, nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu, dni_usu } = req.body; 
    // Compruebo que no estén vacíos
    const condicion = !mail || !pwd || !nomUsuario_usu || !nom_usu || !ape1_usu || !ape2_usu ;

    if (condicion) {
      const error = new Error("Faltan campos");
      error.httpStatus = 400;
      throw error;
    }
    
    
      const registrationCode = generateRandomString(10);      


                //Existe usuario admin, con lo que modificamos
              
                await conexion.query(`
                UPDATE usuarios
                SET
                    nomUsuario_usu = "${nomUsuario_usu}",
                    nom_usu = "${nom_usu}",
                    ape1_usu = "${ape1_usu}",
                    ape2_usu = "${ape2_usu}",
                    biografia_usu = "${biografia_usu}",
                    mail = "${mail}",
                    pwd = "${SHA512(pwd).toString("hex")}",
                    codigoRegistro = "${registrationCode}"
                WHERE rol = "admin";
                `);

                const emailBody = `Te acabas de registrar en Servicios Digitales.
                Pulsa en este link para verificar tu mail: ${process.env.PUBLIC_HOST}/validar/${registrationCode}`;

                await sendMail({
                to: mail,
                subject: 'Activa tu usuario de Servicios Digitales',
                body: emailBody,

                });
                  
                res.send({
                status: "ok",
                message: "Usuario modificado",
                });

      

    } catch(error){
        next(error);
    } finally {
        if (conexion) conexion.release();
    }
}

module.exports = updateAmin;