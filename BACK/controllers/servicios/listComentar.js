const {listar, misConversaciones,misComentarios} = require("../../helpers");
const listComentar = async (req, res, next) => {

  let results;
  let myconversaciones;
  let mycomentarios;

  try {   
      results = await listar();
      myconversaciones = await misConversaciones(req.userAuth.id);
      mycomentarios = await misComentarios(req.userAuth.id);
  
      //Devuelto un json con los servicios
    res.send({
      datosMisComentarios: mycomentarios[0],
      datosMisConversaciones: myconversaciones[0],
      data: results[0],
    });
  } catch (error) {
    next(error);
  } 
};

module.exports = listComentar;