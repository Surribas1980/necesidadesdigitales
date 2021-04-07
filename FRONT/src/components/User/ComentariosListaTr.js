import ComentarioListaTd from "./ComentarioListaTd";
import ComentariosListaParticipo from "./ComentariosListaParticipo";
import { deleteService,descartarServicio } from '../../http/api';
import {useState} from 'react';
import '../../css/ComentariosListaTd.css';
function ComentarioListaTr(props){
 
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const lista = props.dato;



      const irA = async (parametro)=>{
          console.log('irA',parametro);
          const data = await deleteService("/comentar",'POST',1,parametro);
          console.log('Isto é o que recollo', data);
          console.log('isto é o que estou a pasar: ',data['datoscomentariosServicios']);
          setdatoscomentariosServicios(data['datoscomentariosServicios']);
          descartarServicio(`/avisos/1/${parametro}`,'POST');
          
      }
      
      
    return (<> 
                <hr></hr>
                      
                            <hr></hr>
        <div className="caja"><h4>Últimos comentarios realizados</h4>
            <div className="caja">
                {
                   lista?.map((item,index)=>{
                    return (<>
                                <div className="caja">
                                    <div className="comienzo">
                                        <div className="caja3">
                                                <div className="caja2">Id</div>
                                                <div className="bordear">{item.id_ser}</div>
                                        </div>
                                        
                                        <div className="caja3">
                                                <div className="caja2">Usuario</div>
                                                <div className="bordear">{item['buscarUsu(id_usu_co)']}</div>
                                        </div>
                                        <div className="caja3">
                                                <div className="caja2">Comentario</div>
                                                <div className="bordear">{item.comentario}</div>
                                        </div>
                                        <div className="caja3">
                                                <div className="caja2">Ver</div>
                                                <button onClick={()=>{irA(item.id_ser)}}>Ir</button>
                                        </div>
                                    </div>
                                </div>
                                
                                
                    </>)
                })
                }
            </div>
        </div>

        

         {datoscomentariosServicios && <ComentariosListaParticipo elementos={datoscomentariosServicios}></ComentariosListaParticipo>}
    
    </>)

};

export default ComentarioListaTr;