const { deleteFiles,vectorServis} = require("../../helpers");
const deleteServicio = async (req, res, next) => {

    try{        
       

        //Comprobar si el servicio existe o no y devolver 404 si no existe
        const { ids } = req.body;
        let vectorServicios = vectorServis(ids);

        vectorServicios.map((id_ser)=>{
            deleteFiles(id_ser);  
        })
     
        res.send({
            status: "ok",
            message: `Los servicios con ${vectorServicios}  fueron borrados`,
            //directorio:dir
          });
    } catch(error){
        next(error);
    }
    
}

module.exports = deleteServicio;