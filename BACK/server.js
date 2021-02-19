require("dotenv").config();//inserto serv
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const cors = require("cors");
//Controladores de admin
const {
  //deleteServicioAdmin,
  deleteUser,
  newComentAdmin,
  updateAmin,
  deleteServicio,
  } = require("./controllers/admin");

//Controladores de servicios
const {
  deleteComentar,
  getServicio,
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
  editUser,
  getUser,
  listUsers,
  loginUser,
  newUser,
  validateUser
} = require("./controllers/users");


//Controladores middlewares
const {
  isUser,
  servicioExist,
  canEdit,
  canEditAmin,
  cannotAdmin,
  canDeleteService,
  canDeleteUser,
  canDeleteComentar,
  userExists,
  comentarioExists
} = require("./middlewares");

const urls = {    
    serviciosid:"/servicios/:id",
    usersid:"/users/:id",
    servicios:"/servicios",
    users:"/users",
    insertUser:"/users/insertar",
    admin:"/admin/modificar/:id",
    validaregistrationCode:"/validar/:registrationCode",
    usersolution:"/user/solution",
    deleteservicio:"/servicios/borrar",
  };

  const urlsusers= {
    userslogin :"/users/login",
    userlogeado:"/users/userLogin/",
    userborracomentario:"/users/delete/comentario/:id", //
    deleteuser:"/users/delete/:id",
    updateuser:"/users/edit/:id",
    listarcomentarios: "/comentar",
    insertcomentarios: "/users/insert/comentario/:id_ser",
    comentarAdmin: "/comentar/admin",
    votar:"/servicios/votar/:id_servicio/:id_solucionador",
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
app.use(cors());
// POST - /users/login
// Hace login de un usuario 
app.post(urlsusers.userslogin, loginUser);



//Rutas de la API
//Post - userAdmin
app.get(urlsusers.userlogeado,isUser,adminUser);

//Delete - /comentar/:id
//Borra un comentario de la BBDD
app.delete(urlsusers.userborracomentario, isUser,comentarioExists,canDeleteComentar,deleteComentar);

//Delete - /users/:id
//Borra un usuario de la BBDD
app.delete(urlsusers.deleteuser,isUser,userExists,canDeleteUser, deleteUser);

//Delete - /servicios/borrar/:id
//Borra un servicio de la BBDD
app.delete(urls.deleteservicio, isUser, canDeleteService,deleteServicio);


//Put - /usuarios/:id
//Permite al Admin modificar los datos de usuario en la BBDD
app.put(urlsusers.updateuser,isUser,userExists, canEdit ,editUser);

//Get - /servicios/id
//Devuelve un único servicio
app.get(urls.serviciosid,isUser, servicioExist, getServicio);



//Insertar Solucion

app.post(urls.usersolution,isUser,servicioExist,cannotAdmin,insertSolutions);

//GET - /comentar
//Devuelve todos los comentarios de la tabla comentar
app.get(urlsusers.listarcomentarios,isUser, listComentar);

//Get - /servicios
//Devuelve todos los elementos de la tabla servicios
app.get(urls.servicios,isUser, listServicios);

//Get - /users
//Devuelve todos los usuarios de la tabla usuarios
app.get(urls.users,isUser, listUsers);

//Post - /comentar
//Añade un comentario al servicio
app.post(urlsusers.insertcomentarios,isUser,servicioExist, newComentar);

//Post - /comentar/admin
//Añade un comentario realizado por el admin
app.post("/comentar/admin",isUser, newComentAdmin);

//Post - /servicios
//Insertamos un servicio
//app.post("/servicios", isUser);
app.post(urls.servicios, isUser,cannotAdmin,newServicio);

//Post - /user
//Insertamos un usuario
app.post(urls.insertUser,newUser);

//Get - admin
//Insertar o modificar "admin"
app.put(urls.admin,isUser,userExists,canEditAmin,updateAmin);

//Get - user
//Validar usuario
app.get(urls.validaregistrationCode,validateUser); 



//Post - /servicios
//Añade puntuación a un servicio
app.post(urlsusers.votar,isUser,cannotAdmin, voteServicio);

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
