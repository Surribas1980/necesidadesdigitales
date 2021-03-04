const {listar, misConversaciones,misComentarios,comentariosServicio} = require("../../helpers");


const listComentar = async (req, res, next) => {

  let results;
  let myconversaciones;
  let mycomentarios;
  let comentariosdelServicio;


  const {ids} = req.body;

  try {   
      if(ids){
        
        console.log('esto es ids: ',ids)
        comentariosdelServicio = await comentariosServicio(ids);
        console.log('Comentarios del servicio: ',comentariosdelServicio)
      }
      results = await listar();
      myconversaciones = await misConversaciones(req.userAuth.id);
      mycomentarios = await misComentarios(req.userAuth.id);
  
      //Devuelto un json con los servicios
    res.send({
      datoscomentariosServicios: comentariosdelServicio[0],
      datosMisComentarios: mycomentarios[0],
      datosMisConversaciones: myconversaciones[0],
      data: results[0],
    });
  } catch (error) {
    next(error);
  } 
};

module.exports = listComentar;