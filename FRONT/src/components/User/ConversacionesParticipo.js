import {useEffect,useState} from 'react';
import {deleteService, descartarServicio } from '../../http/api';
import ComentarioListaTd from './ComentarioListaTd';
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
    <table className="table">
        <thead>
            <tr>
                <th>Id del servicio</th>
                <th>Último comentario</th>
            </tr>
        </thead>
        <tbody>
            {
                misconversaciones?.map((item)=>{
                    return (<>
                        <tr>
                            <td>{item.id_ser_co}</td>
                            <td>{item.comentario}</td>
                            <td><button onClick={()=>{irA(item.id_ser_co)}}>Ir a la conversación</button></td>
                        </tr>
                    </>)
                })
            }
        </tbody>
    </table>
    {datoscomentariosServicios && <ComentarioListaTd elementos={datoscomentariosServicios}></ComentarioListaTd>}
    
    </>);
}

export default ConversacionesParticipo;