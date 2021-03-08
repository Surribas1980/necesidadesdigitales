/**
En este end-point me surge la siguiente duda:
    > En el programa de viajes, está como entrada de parámetros req.params un "id".
    En ese sentido, no entiendo lo siguiente:
        -> Parto de la base de que el usuario está logueado, con lo cual el "id" del token
        corresponde al usuario, entonces...
         -porqué se comprueba con un "id" de req.params y en caso de ser así
         cómo se conoce...quién lo envía?

    =>>>  Con lo que, en principio no comprobaré nada hasta aclarar esta duda
    siendo dicho id, el traído con el token

 */
const {SHA512} = require("sha2"); 
const getDB = require("../../db");
const { insertFiles } = require("../../helpers");
const editEntry = async (req, res, next) => {
    let connection;
    const datoEnviado = {};
    try {

        console.log(`Llega a edit`)
        connection = await getDB();
        // Sacar id de req.params  .Entiendo que este id es mandado desde el front
        //Al mismo tiempo podría ser mandado al front en el logeo?
        const { id } = req.params; // este es el id de usuario que queremos editar
         // Comprobar que el usuario que queremos editar es el mismo del token o somos administradores
        if (req.userAuth.id !== Number(id) && req.userAuth.role !== "admin") {
            const error = new Error("No tienes permisos para editar este usuario");
            error.httpStatus = 403;
            throw error;
        }
        
      // Sacar la información actual del usuario en la base de datos
      const [dateUser] = await connection.query(`
        select nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu, mail, pwd from usuarios where id_usu = ?;`,[id]);
     
        const { nomUsuario_usu, nom_usu, ape1_usu, ape2_usu,biografia_usu, mail,pwd} = req.body;
        // Si el email enviado es diferente al de la base de datos procesar el nuevo email
        console.log('NomUsuario: ',nomUsuario_usu);
        console.log('id: ',id);
        console.log(`${dateUser[0].mail}`)
        
        if (mail && mail !== dateUser[0].mail) {
        // Comprobar que no exista otro usuario con el nuevo email
        const [existingEmail] = await connection.query(
          `
          SELECT id_usu
          FROM usuarios
          WHERE mail=?
        `,
          [mail]
        );
  
        if (existingEmail.length > 0) {
          const error = new Error(
            "Ya existe un usuario con el email proporcionado en la base de datos"
          );
          error.httpStatus = 409;
          throw error;
        }
    }
         //Comprobar que tenemos los datos mínimos en el body       
        
       datoEnviado.nomUsuario_usu = nomUsuario_usu;
       datoEnviado.nom_usu = nom_usu;
       datoEnviado.ape1_usu = ape1_usu;
       datoEnviado.ape2_usu = ape2_usu;
       datoEnviado.biografia_usu = biografia_usu;
       datoEnviado.mail = mail;
       datoEnviado.pwd = pwd;
        
        for(const dentro in dateUser){
            for(const campo in dateUser[dentro]){

                if(datoEnviado[campo] !== "null" ){
                    if(campo === "pwd"){
                        //console.log(SHA512(datoEnviado[campo]).toString("hex"));
                        dateUser[dentro][campo] = SHA512(datoEnviado[campo]).toString("hex");
                    }else{
                      dateUser[dentro][campo] = datoEnviado[campo];  
                    }
                   
                }
            }
        }

const dato = {
    "usuario": `${id}`,    
    "carpeta": `docs/fotousuario${id}`,
}
if(req.files){
    console.log('vienen ficheros');
}
    if (req.files && req.files.nomFoto_usu) {
      // Se está subiendo una foto
      dateUser[0]['nomFoto_usu'] = req.files.nomFoto_usu.name;
      insertFiles(req.files,dato);
    }
    

    //Hacer la query del UPDATE

    await connection.query(
        `UPDATE usuarios SET 
        pwd=?, 
        nomUsuario_usu=?, 
        nom_usu=?,
        ape1_usu=?,
        ape2_usu=?,
        biografia_usu=?,
        mail=?
        WHERE id_usu= ?;`,
        [
            dateUser[0]['pwd'],    
            dateUser[0]['nomUsuario_usu'], 
            dateUser[0]['nom_usu'],
            dateUser[0]['ape1_usu'],
            dateUser[0]['ape2_usu'],
            dateUser[0]['biografia_usu'],
            dateUser[0]['mail'],
            id
        ]
    );

        res.send({
            status: "OK",
            dato : datoEnviado,
            datosalida: dateUser
        });

    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editEntry;