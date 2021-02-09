const getDB = require("../../db");
const {generateRandomString,sendMail} = require("../../helpers");
/**
 * Esta función trabaja para establecer el admin, para ello me surgieron dudas:
 * 
 *    a) Trabajar con un usuario por defecto introducido de manera manual o previamente con una instrucciónn) como "admin" inicial con valores vacíos
 *    b) O un "id" único con el que trabajar y modificar.
 *    c) O partir de la base que la primera vez que se abre la plataforma será por el administrador de la plataforma
 *       lo que implicaría realizarlo como normal y viendo este inicialmente todo. Este restringiría posteriormente ciertos permisos
 *    d) O cualquier otra que ahora mismo no se me ocurre
 * 
 * Para establecer un criterio inicial voy a partir con la opción "a". Introduciendo así desde Postman una sentencia url de la siguiente forma:
 * 
 *                                  localhost:3000/admin, 
 * y el dato de la forma siguiente:
 *  
 * {
    "role":"admin",
    "email":"xxxxx@gmail.com",
    "password":1231241,
    "nomUsuario_usu": "Jesus",
    "nom_usu":"ADAAADDDAAA",
    "ape1_usu":"jñklñlka",
    "ape2_usu":"gadfñaoi8",
    "biografia_usu": "añjdkñflqperiqpañkdcn ñdkjpqeifc dfa",
    "dni_usu": "244444G"
}
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

    
    const { role, email, password, nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu, dni_usu } = req.body; 
    // Compruebo que no estén vacíos

    if (!email || !password || !nomUsuario_usu || !nom_usu || !ape1_usu || !ape2_usu  || !dni_usu ) {
      const error = new Error("Faltan campos");
      error.httpStatus = 400;
      throw error;
    }
    
      // Compruebo que no exista un usuario en la base de datos con ese email

      const datoBbdd = await conexion.query(
        `
        SELECT role
        FROM usuarios
        WHERE role="admin";
      `
      );
      const registrationCode = generateRandomString(10);
      
        console.log(`Esto es lo que me trae la bbdd ${datoBbdd[0]}`);
        datoBbdd[1].map((item)=>{console.log(item)});
        datoBbdd[0].map((item)=>{console.log(item)});
        console.log(`Cojo el objeto ${datoBbdd[0][0]}`)
        console.log(`Cojo el valor ${datoBbdd[0][0].role}`)
        res.send({
          status: "ok",
          message: "Usuario modificado",
          });
    if (role !== datoBbdd[0][0].role) {

                //Existe usuario admin, con lo que modificamos
              
                await conexion.query(`
                UPDATE usuarios
                SET
                    nomUsuario_usu = "${nomUsuario_usu}",
                    nom_usu = "${nom_usu}",
                    ape1_usu = "${ape1_usu}",
                    ape2_usu = "${ape2_usu}",
                    biografia_usu = "${biografia_usu}",
                    dni_usu = "${dni_usu}",
                    mail = "${email}",
                    pwd = "${password}",
                    codigoderegistro = "${registrationCode}"
                WHERE role = "admin";
                `);

                const emailBody = `Te acabas de registrar en Servicios Digitales.
                Pulsa en este link para verificar tu mail: ${process.env.PUBLIC_HOST}/validar/${registrationCode}`;

                await sendMail({
                to: email,
                subject: 'Activa tu usuario de Servicios Digitales',
                body: emailBody,

                });
                  
                res.send({
                status: "ok",
                message: "Usuario modificado",
                });

      }

    } catch(error){
        next(error);
    } finally {
        if (conexion) conexion.release();
    }
}

module.exports = updateAmin;