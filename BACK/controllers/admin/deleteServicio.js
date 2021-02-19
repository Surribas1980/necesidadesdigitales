const getDB = require("../../db");
const fs = require("fs").promises;
const path = require("path");
const { deleteFiles} = require("../../helpers");
const deleteServicio = async (req, res, next) => {

    let connection;
    try{        
        connection = await getDB();

        //Comprobar si el servicio existe o no y devolver 404 si no existe
        const { ids } = req.body;
        let idServicio ='';
        let vectorServicios = [];
        
       
        console.log('ids: ', ids);
        
        console.log(ids);
        console.log('Tamaño de ids',ids.length);
        for(const valor in ids){
         console.log(`${valor}=${ids[valor]}`)
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
    
        console.log(vectorServicios);
        //Rutas a borrar 
        
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
    } finally {
        if (connection) connection.release();
    }
    
}

module.exports = deleteServicio;