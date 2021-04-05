const { format } = require("date-fns");
const sgMail = require('@sendgrid/mail');
const path = require("path");
const crypto = require("crypto");
const fs = require("fs").promises;
const fs1 = require("fs"); 
const getDB = require("./db");
const uuid = require('uuid');
const sharp = require('sharp');
sgMail.setApiKey('');


async function buscarDentro(dir){

  const archivos = [];
  try{
      const contDirectorio = await fs.readdir(dir);
      for(const contenido of contDirectorio)
      {
          const pathEntra = path.join(dir,contenido);
          const infoEntra = await fs.stat(pathEntra);

          if(infoEntra.isDirectory()){
             console.log(`El path es ${pathEntra}`)
             await buscarDentro(pathEntra);
          }
          else if(infoEntra.isFile()){
              console.log(`El path es ${pathEntra}, el fichero es ${contenido}, pesa ${infoEntra.size} y su fecha es ${infoEntra.birthtime}`);
              archivos.push(contenido);
          }
      }
      return archivos;
  }
  catch(error){console.error(error.message);}
}

async function buscarArchivos(dir){
  try {
   return await buscarDentro(dir);
  } catch (e) {
    throw new Error("El directorio no existe");
  }
}
//se manda como un objeto, y este ya lo desestructura en 'to','subject' y 'body'
async function sendMail({to,subject,body}){
    try{
            const msg = {
                    to,
                    from: 'israel.surribas.planas@gmail.com', // Use the email address or domain you verified above
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
async function savePhoto(imageData,dato) {
  // imageData es el objeto con información de la imagen
  if(!fs1.existsSync(dato.carpeta)){
    fs1.mkdirSync(dato.carpeta);
  }
  // Leer la imagen con sharp
  const image = sharp(imageData.data);

  // Comprobar que la imagen no tenga un tamaño mayor a X pixeles de ancho
  const imageInfo = await image.metadata();

  // Si es mayor que ese tamaño redimensionarla a ese tamaño
  const IMAGE_MAX_WIDTH = 1000;
  if (imageInfo.width > IMAGE_MAX_WIDTH) {
    image.resize(IMAGE_MAX_WIDTH);
  }

  // Generar un nombre único para la imagen
  const savedImageName = `${uuid.v4()}.jpg`;

  // Guardar la imagen en el directorio de subida de imagenes
  await image.toFile(path.join(dato.carpeta, savedImageName));

  // Devolver en nombre del fichero
  return savedImageName;
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

function vectorServis(ids){
  let vectorServicios = [];
  let idServicio ='';
  for(const valor in ids){
     if(ids[valor] === ','){
       vectorServicios.push(idServicio)
       idServicio = '';
       
     }else{        
       idServicio += ids[valor];
      
       if((ids.length-1) == valor){
         vectorServicios.push(idServicio)
       }
     }
   }
   return vectorServicios;
}


async function deleteFiles(id){
  try{
    borrarServicio(id);
    const ruta = `docs/servicios/${id}`;
    const dir = path.join(__dirname,ruta);
    await fs.rmdir(dir, {recursive: true, });
  }catch(error){
    console.error(error.message);
  }
  
}
function insertFiles(ficheros,datos,nomFoto){
console.log('estoy en isner')
for (const archivo in ficheros){
  //console.log(`estoy dentro ${ficheros[archivo].name}`);
    uploadFile(ficheros[archivo],datos,nomFoto);
  }
}

////Funciones SQL /////

async function borrarServicio(id){
  let connection;
  try{
    connection = await getDB();
    await connection.query(`DELETE FROM servicios WHERE id_ser = ?`,[id]);
    
  }
  catch(error){
    const e = new Error('Error borrarServicio datos');
    e.httpStatus = 500;
    throw e;
  }finally {
    if (connection) connection.release();
  }
}

async function modificarDatos(tabla,valor,valorcampo,campo){
  
  let results;
  let connection;
  connection = await getDB();
  try{
    let setSolucionar = `SET solucionado = ${valor} WHERE ${campo} = ${valorcampo};`;
    
    results = await connection.query(`UPDATE ${tabla} ${setSolucionar}`);
    return results;
  }catch(error){
    const e = new Error('Error modificando datos');
    e.httpStatus = 500;
    throw e;
  } finally {
    if (connection) connection.release();
  }

}

async function listar(){
  let results;
  let connection;
  connection = await getDB();

  try{
    [results]=await connection.query(`call Conversaciones`);
    return results;
  }catch (error) {
    const e = new Error('Error cargando datos de listar');
    e.httpStatus = 500;
    throw e;
  } finally {
    if (connection) connection.release();
  }
}
async function listarDatos(limite,inicioLista,alante,search1,search2) {
  
  let results;
  let connection;
  connection = await getDB();
  try {
    console.log('estoy en listar')
    if(search1 || search2){
      //ojo, esto puede dar lugar a error si desde el front no se hace la búsquda de manera
      //correcta
      console.log('Paso por search')
        await connection.query(`call tablaLimitadaServicios(?, ?, ?);`,[limite,inicioLista,alante]);
        [results]= await connection.query(`call buscarValor(?,?);`,[search1,search2]);
    }else{
            if('1' === alante){
              console.log('paso por 1')
              await connection.query(`call tablaLimitadaServicios(?, ?, ?);`,[limite,inicioLista,alante]);
            }else{
              await connection.query(`call miBucle(?, ?);`,[limite,inicioLista]);
            }
            
           [results] = await connection.query(`select * from servicioslimitada;`);
            
    }
    return results;

    
  } catch (error) {
    const e = new Error('Error cargando datos de lista de busqueda');
    e.httpStatus = 500;
    throw e;
  } finally {
    if (connection) connection.release();
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
  } finally {
    if (connection) connection.release();
  }
}
async function datosServicios(condicion,usuario){
  let connection;
  let sql;
  try {
    connection = await getDB();    
    sql = await connection.query(`call tablatemporal(${condicion},${usuario});`);
    return sql;
    } catch (error) {
      const e = new Error('Error cargando datos de servicios');
      e.httpStatus = 500;
      throw e;
  } finally {
    if (connection) connection.release();
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
  } finally {
    if (connection) connection.release();
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
  }finally {
    if (connection) connection.release();
  }
}
async function misConversaciones(usuario){
  let connection;
  let sql;

  try {
    connection = await getDB();
    sql = await connection.query(`call misConversaciones(${usuario})`);
    return sql;
  } catch (error) {
    const e = new Error('Error cargando datos de misConversaciones');
      e.httpStatus = 500;
      throw e;
  }finally{
    if (connection) connection.release();
  }
}
async function misNumComentarios(usuario,campo) {
  let connection;
  let sql;

    try {
      connection = await getDB();
      sql = await connection.query(`select count(${campo}) from avisos
      where ${campo} = 1 and idUsuarioorigen = ?`,[usuario]);  
      
      return sql;
    } catch (error) {
      const e = new Error('Error cargando datos de misNumComentarios');
      e.httpStatus = 500;
      throw e;
    } finally {
      if (connection) connection.release();
    }

}
async function comentariosServicio(idServicio){
  let connection;
  let sql;
  try{
    connection = await getDB();
    sql = await connection.query(`select * from comentar join usuarios on id_usu_co = id_usu where id_ser_co = ?;`,[idServicio]);
    return sql;
  } catch (error) {
    const e = new Error('Error cargando datos de comentariosServicio');
    e.httpStatus = 500;
    throw e;
  } finally {
    if (connection) connection.release();
  }
}
async function misComentarios(usuario){
  let connection;
  let sql;
  try{
    connection = await getDB();
    sql = await connection.query(`call misComentarios(${usuario})`);
    return sql;
  }catch(error){
    const e = new Error('Error cargando datos de misComentarios');
    e.httpStatus = 500;
    throw e;
  }finally{
    if (connection) connection.release();
  }
}

async function misServes(usuario,condicion){
  let connection;
  let sql;
  
  try {
    connection = await getDB();    
    sql = await connection.query(`call misServicios(${condicion},${usuario});`);
    return sql;
  } catch (error) {
    const e = new Error('Error cargando datos de misServes');
      e.httpStatus = 500;
      throw e;
  } finally {
    if (connection) connection.release();
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
  } finally {
    if (connection) connection.release();
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
  } finally {
    if (connection) connection.release();
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
  misNumComentarios,
  miNumSolucionados,
  insertServicio,
  listarDatos,
  modificarDatos,
  deleteFiles,
  vectorServis,
  listar,
  misConversaciones,
  comentariosServicio,
  savePhoto,
  buscarArchivos
};
