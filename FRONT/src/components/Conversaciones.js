import { useState,useEffect} from 'react';
import {deleteService} from '../http/api';
import ComentarioListaTd from './User/ComentarioListaTd';
function Conversaciones(props){
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const conversacion = props.convergeneral;

    const irA = async (id_ser)=>{    
        console.log('esto es el id_ser',id_ser)    
        const data = await deleteService("/comentar",'POST',1,id_ser);
        console.log ('datos que entran',data)
        setdatoscomentariosServicios(data['datoscomentariosServicios']);
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id del servicio</th>
                    <th>Usuario</th>
                    <th>Avatar</th>
                    <th>Último comentario</th>
                    <th>Fecha</th>
                    <th>Ir a conversacion</th>
                </tr>
            </thead>
            <tbody>
                {
                    conversacion?.map((item,index)=>{
                        return (<>
                            <tr>
                                <td>{item.id_ser}</td>
                                <td>{item.nom_usu}</td>
                                <td><img key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item.nomFoto_usu}`} alt="imagen"/></td>
                                <td>{item.comentario}</td>
                                <td>{item.fecha}</td>
                                <td><button onClick={()=>{irA(item.id_ser)}}>Ver conversacion</button></td>
                            </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
        {datoscomentariosServicios && <ComentarioListaTd elementos={datoscomentariosServicios}></ComentarioListaTd>}
    
    </>)
}

export default Conversaciones;