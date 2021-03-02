const {listar, misConversaciones} = require("../../helpers");
const listComentar = async (req, res, next) => {

  let results;
  let myconversaciones;

  try {   
      results = await listar();
      myconversaciones = await misConversaciones(req.userAuth.id);
    //Devuelto un json con los servicios
    res.send({
      datosMisConversaciones: myconversaciones[0],
      data: results[0],
    });
  } catch (error) {
    next(error);
  } 
};

module.exports = listComentar;