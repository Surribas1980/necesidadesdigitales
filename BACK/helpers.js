const { format } = require("date-fns");
const sgMail = require('@sendgrid/mail');
const sharp = require("sharp");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs").promises;
const getDB = require("./db");
const { result } = require("lodash");
const {ensuDir, unlink} = require("fs-extra");
sgMail.setApiKey('');

//se manda como un objeto, y este ya lo desestructura en 'to','subject' y 'body'
async function sendMail({to,subject,body}){
    try{
            const msg = {
                    to,
                    from: process.env.SENDGRID_FROM, // Use the email address or domain you verified above
                    subject,
                    text: body,
                    html: `
                    <div>
                        <h1>${subject}</h1>
                        <p>${body}</p>
                    <strong>and easy to do anywhere, even with Node.js</strong>
                    </div>
                    `
                };
            await sgMail.send(msg);
    }catch(error){
        console.log(error)
        throw new Error("Error enviando mail");
    }
}

// Genera una cadena de caracteres aleatoria
function generateRandomString(length) {
    return crypto.randomBytes(length).toString("hex");
  }
function formatDateToDB(dateObject) {
  return format(dateObject, "yyyy-MM-dd HH:mm:ss");
}


async function uploadFile(mifichero,datos) {
  
  try{
     // Generar un nombre único para la carpeta
    
    let dir = path.join(__dirname,`./${datos.carpeta}/`);
    console.log(`${dir} upload`);
    mifichero.mv(`${dir}` + mifichero.name);
  }catch(error){
    console.error(error.message);
  }
}
async function deleteFiles(id){

  const ruta = `docs/servicios/${id}`;
  const dir = path.join(__dirname,ruta);
  await fs.rmdir(dir, {recursive: true, });
}
function insertFiles(ficheros,datos){
console.log('estoy en isner')
  for (const archivo in ficheros){
    //console.log(`estoy dentro ${ficheros[archivo].name}`);
    uploadFile(ficheros[archivo],datos);
  }
}

////Funciones SQL /////

async function modificarDatos(tabla,valor,valorcampo,campo){

  try{
    let results;
    let connection;
    let setSolucionar = `SET solucionado = ${valor} WHERE ${campo} = ${valorcampo};`;
    connection = await getDB();

    results = await connection.query(`UPDATE ${tabla} ${setSolucionar}`);
    return results;
  }catch(error){
    const e = new Error('Error modificando datos');
    e.httpStatus = 500;
    throw e;
  }

}


async function listarDatos(tabla,campos,search) {

  try {
    let results;
    let connection;
    connection = await getDB();
   
    if(search){
      results = await connection.query(`select * from ${tabla} where ${campos.campo1} like ?`,[`%${search}%`]);
    }
    else{
      results = await connection.query(`select * from ${tabla}`);
    }

    return results;

  } catch (error) {
    const e = new Error('Error cargando datos de lista de busqueda');
    e.httpStatus = 500;
    throw e;
  }

  
}


///////
async function rank(){
  let connection;
  let sql;

  try {
    connection = await getDB();
    sql = await connection.query(`select usuarios.nom_usu ,sum(puntuacion)
    from servicios inner join solucionar
    on servicios.id_ser = solucionar.id_ser_sol
    join usuarios
    on usuarios.id_usu = solucionar.id_usu_sol
    where solucionar.solucionado = 1
    group by usuarios.id_usu
    order by sum(puntuacion) desc;`);
    return sql;
  } catch (error){
      const e = new Error('Error cargando datos de ranking');
      e.httpStatus = 500;
      throw e;
  }
}
async function datosServicios(condicion){
  let connection;
  let sql;
  try {
    connection = await getDB();
    
    await connection.query(`call tablatemporal(${condicion});`);
    sql = await connection.query(`select puntos(id_usu),puntos(id_usu_sol),buscarUsu(id_usu_sol) as 'Solucionador',nom_usu,titulo_ser,puntuacion from temporal L join servicios on L.id_ser_soli = id_ser;`);
    return sql;
    } catch (error) {
      const e = new Error('Error cargando datos de servicios');
      e.httpStatus = 500;
      throw e;
  }
}
///////Mis servicios

async function insertServicio(id_usuario,dato){
  let connection;
  
  try{
   
    await connection.query(`call insertarServicio(?,?,?,?)`,[id_usuario,dato.explicacion,new Date(),dato.titulo]);
    return 1;
  }catch(error){
    const e = new Error('Error insertando Servicio solicitado');
      e.httpStatus = 500;
      throw e;
  }
}

async function miNumSolucionados(usuario) {
  let connection;
  let sql;

  try {
    connection = await getDB();

    sql = await connection.query(`select  count(id_sol) 
    from solucionar where solucionado = 1 && id_usu_sol= ?;`,[usuario]);
    return sql;
  } catch (error){
    const e = new Error('Error cargando datos de miNumSolucionados');
      e.httpStatus = 500;
      throw e;
  }
}
async function misComentarios(usuario,campo) {
  let connection;
  let sql;

    try {
      connection = await getDB();
      sql = await connection.query(`select count(${campo}) from comentar join usuarios
      on usuarios.id_usu = comentar.id_usu_co
      where ${campo} = 1 and id_usu_co = ?`,[usuario]);  
      
      return sql;
    } catch (error) {
      const e = new Error('Error cargando datos de misComentarios');
      e.httpStatus = 500;
      throw e;
    }

}
async function misServes(usuario,solucionados){
  let connection;
  let sql;
  let condicion;
  let instrucionSql;
  try {
    connection = await getDB();
    instrucionSql =`select titulo_ser,nombre_fich_ser,puntuacion 
    from servicios join solicitar
    on servicios.id_ser = solicitar.id_ser_soli
    where solicitar.id_usu_soli = ?`;
    if(solucionados){
      condicion = "puntuacion >= 2.5";
      sql = await connection.query(`${instrucionSql} and ${condicion}`,[usuario]); 
    }else{
      condicion = "puntuacion < 2.5";
      sql = await connection.query(`${instrucionSql} and ${condicion}`,[usuario]); 
    }
      return sql;

  } catch (error) {
    const e = new Error('Error cargando datos de misServes');
      e.httpStatus = 500;
      throw e;
  }
  
}

async function elServicios(usuario){
  let connection;
  let sql;
  try{
    connection = await getDB();

    sql = await connection.query(`select * from servicios join solicitar
    on servicios.id_ser = solicitar.id_ser_soli
    where solicitar.id_usu_soli = ?;`,[usuario]);
    return sql;
  }catch(error){
    const e = new Error('Error cargando datos de elServicios');
      e.httpStatus = 500;
      throw e;
  }
}

async function numServSoli(usuario) {
  let connection;
  let sql;
  try{
    connection = await getDB();
    sql = await connection.query(`select count(id_ser) 
    from servicios join solicitar
      on servicios.id_ser = solicitar.id_ser_soli
      where solicitar.id_usu_soli = ?;`,[usuario]);
    return sql;
  } catch{
    const e = new Error('Error cargando datos de numServSoli');
      e.httpStatus = 500;
      throw e;
  }
}

////////////
module.exports = {
  formatDateToDB,
  sendMail,
  generateRandomString,
  uploadFile,
  insertFiles,
  datosServicios,
  rank,
  elServicios,
  numServSoli,
  misServes,
  misComentarios,
  miNumSolucionados,
  insertServicio,
  listarDatos,
  modificarDatos,
  deleteFiles
};
