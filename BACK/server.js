require("dotenv").config();//inserto serv
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');

//Controladores de admin
const {
  deleteServicioAdmin,
  deleteUser,
  newComentAdmin,
  updateAmin,
  } = require("./controllers/admin");

//Controladores de servicios
const {
  deleteComentar,
  getServicio,
  insertSolBy,
  insertSolutions,
  listComentar,
  listServicios,
  newComentar,
  newServicio,
  voteServicio
  } = require("./controllers/servicios");

// Controladores de usuarios
const {
  adminUser,
  deleteServicio,
  editUser,
  getUser,
  listUsers,
  loginUser,
  newUser,
  validateUser
} = require("./controllers/users");


//Controladores middlewares
const {isUser,servicioExist} = require("./middlewares");
const urls = {    
    serviciosid:"/servicios/:id",
    usersid:"/users/:id",
    servicios:"/servicios",
    users:"/users",
    insertUser:"/users/insertar",
    admin:"/admin",
    validaregistrationCode:"/validar/:registrationCode",
    usersolution:"/user/solution",
    deleteservicio:"/servicios/:id",
  };

  const urlsusers= {
    userslogin :"/users/login",
    userlogeado:"/users/userLogin/",
    userborracomentario:"/comentar/:id",
    deleteuser:"/users/:id",
    updateuser:"/users/:id",
    listarcomentarios: "/comentar",
    insertcomentarios: "/comentar",
    comentarAdmin: "/comentar/admin",
  };

//Esto es un comentario de prueba antes del nuevo push

const { PORT } = process.env;

//Creo la app de express
const app = express();

//Aplico middlewares
app.use(morgan("dev"));
// Body parser (body en JSON)
app.use(bodyParser.json()); //Comentario realizado por [Israel] : no recuerdo para que lo hace
//app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({
  createParentPath: true
}));

// POST - /users/login
// Hace login de un usuario 
app.post(urlsusers.userslogin, loginUser);



//Rutas de la API
//Post - userAdmin
app.get(urlsusers.userlogeado,isUser,adminUser);

//Delete - /comentar/:id
//Borra un comentario de la BBDD
app.delete(urlsusers.userborracomentario, deleteComentar);

//Delete - /servicios/:id
//Borra un servicio de la BBDD por el Admin
app.delete(urls.deleteservicio, deleteServicioAdmin);

//Delete - /servicios/:id
//Borra un servicio de la BBDD
app.delete(urls.deleteservicio, deleteServicio);

//Delete - /users/:id
//Borra un usuario de la BBDD
app.delete(urlsusers.deleteuser, deleteUser);

//Put - /usuarios/:id
//Permite al Admin modificar los datos de usuario en la BBDD
app.put(urlsusers.updateuser,isUser, editUser);

//Get - /servicios/id
//Devuelve un único servicio
app.get(urls.serviciosid, getServicio);

//Get - /users/id
//Devuelve un único usuario
app.get(urls.usersid, getUser);

//Post - /user/solution/:id
//Indica quien ha finalizado un servicio
app.post("/user/solution/:id", insertSolBy);

//Insertar Solucion

app.post(urls.usersolution,isUser,servicioExist,insertSolutions);//importante !! TENEMOS QUE INSERTAR isUser y el usuario debe ser otro al que envía la solucion

//GET - /comentar
//Devuelve todos los comentarios de la tabla comentar
app.get(urlsusers.listarcomentarios,isUser, listComentar);

//Get - /servicios
//Devuelve todos los elementos de la tabla servicios
app.get(urls.servicios, listServicios);

//Get - /users
//Devuelve todos los usuarios de la tabla usuarios
app.get(urls.users,isUser, listUsers);

//Post - /comentar
//Añade un comentario al servicio
app.post(urlsusers.insertcomentarios,isUser,servicioExist, newComentar);

//Post - /comentar/admin
//Añade un comentario realizado por el admin
app.post("/comentar/admin", newComentAdmin);

//Post - /servicios
//Insertamos un servicio
//app.post("/servicios", isUser);
app.post(urls.servicios, isUser,newServicio);

//Post - /user
//Insertamos un usuario
app.post(urls.insertUser,newUser);

//Get - admin
//Insertar o modificar "admin"
app.post(urls.admin,updateAmin);

//Get - user
//Validar usuario
app.get(urls.validaregistrationCode,validateUser); 



//Put - /servicios
//Añade puntuación a un servicio
app.put("/servicios/:id", voteServicio);

//Middleware de error
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.httpStatus || 500).send({
    status: "error",
    message: error.message,
  });
});

//Middleware de 404
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Not Found",
  });
});

//Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionado en http://localhost:${PORT}`);
});
