import {useEffect,useState} from 'react';
import {deleteService, descartarServicio } from '../../http/api';
import ComentarioListaTd from './ComentarioListaTd';
import ComentariosListaParticipo from './ComentariosListaParticipo';
import '../../css/ComentariosListaTd.css';
function ConversacionesParticipo(props){
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const misconversaciones = props?.misconvergenericas;
   
    useEffect(()=>{
        const pongoaCeroSinVer = async (idservicio)=>{
           await descartarServicio(`/avisos/0/${idservicio}`,'POST');
        }
        misconversaciones?.map((item)=>{

            pongoaCeroSinVer(item.id_ser_co);
        })
    },[]);

    const irA = async (parametro)=>{
        console.log('irA',parametro);
        const data = await deleteService("/comentar",'POST',1,parametro);
        console.log('Isto é o que recollo', data);
        console.log('isto é o que estou a pasar: ',data['datoscomentariosServicios']);
        setdatoscomentariosServicios(data['datoscomentariosServicios']);
        descartarServicio(`/avisos/1/${parametro}`,'POST');
        
    }

    return (<>
    
    <div className="caja">
        <div className="caja">
            
                {
                    misconversaciones?.map((item)=>{
                        return (<>
                        <div className="caja">
                            <div className="comienzo">
                                <div className="caja3">
                                    <div className="caja2">Id</div>
                                    <div className="bordear">{item.id_ser_co}</div>
                                </div>
                                <div className="caja3">
                                    <div className="caja2">Comentario</div>
                                    <div className="bordear">{item.comentario}</div>
                                </div>
                                <div className="caja3">
                                    <div className="caja2">Ir</div>
                                    <button onClick={()=>{irA(item.id_ser_co)}}>Ir a la conversación</button>
                                </div>
                            </div>
                        </div>
                            
                        </>)
                    })
                }
            
        </div>
    </div>

    {datoscomentariosServicios && <ComentariosListaParticipo elementos={datoscomentariosServicios}></ComentariosListaParticipo>}
    
    </>);
}

export default ConversacionesParticipo;