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
      }else{
         results = await listar();
         myconversaciones = await misConversaciones(req.userAuth.id);
         mycomentarios = await misComentarios(req.userAuth.id);
         console.log('Esto es results: ',results);
         console.log('Estos son mis conversaciones: ',myconversaciones);
         console.log('Esto es mis comentarios: ', mycomentarios);
      }
     
  
      //Devuelto un json con los servicios
    res.send({
      datoscomentariosServicios: comentariosdelServicio,
      datosMisComentarios: mycomentarios,
      datosMisConversaciones: myconversaciones,
      data: results,
    });
  } catch (error) {
    next(error);
  } 
};

module.exports = listComentar;