
import { useState,useEffect} from 'react';
import {deleteService} from '../http/api';
import ComentarioListaTd from './User/ComentarioListaTd';
import '../css/ComentariosListaTd.css';
function Conversaciones(props){
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const [comentarConJoin,setcomentarConJoin] = useState("");
    const conversacion = props.convergeneral;

    const irA = async (id_ser)=>{    
        console.log('esto es el id_ser',id_ser)    
        const data = await deleteService("/comentar",'POST',1,id_ser);
        console.log ('datos que entran',data)
        setdatoscomentariosServicios(data['datoscomentariosServicios']);
        setcomentarConJoin(data['comentarConJoin'][0][0]);
        console.log('datos con join en conversaciones',data['comentarConJoin'][0][0])

    }


    return (<><hr></hr>
       
        <hr></hr>
        <div className="caja">
            <div className="caja">
            {
                    conversacion?.map((item,index)=>{
                        return (<>
                        <div className="caja">

                            <div className="comienzo">
                                <div className="caja3">
                                    <div className="caja2">Id</div>
                                    <div className="bordear">{item.id_ser}</div>
                                </div>
                                <div className="caja3">
                                    <div className="caja2">Alias</div>
                                    <div className="bordear"><img className="imgagen" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item.nomFoto_usu}`} alt="imagen"/></div>
                                    <div className="bordear">{item.nom_usu}</div>
                                </div>
                            
                                <div className="caja3">
                                    <div className="caja2">Comentario</div>
                                    <div className="bordear">{item.comentario}</div>
                                </div>
                                <div className="caja3">
                                    <div className="caja2">Fecha</div>
                                    <div className="bordear">{item.fecha}</div>
                                </div>
                                <div className="caja3">
                                    <div className="caja2">Conversación</div>
                                    <button onClick={()=>{irA(item.id_ser)}}>Ver</button>
                                </div>
                            </div>
                        </div>
                            
                        </>)
                    })
                }
            </div>
        </div>
            {comentarConJoin && <ComentarioListaTd conjoin={comentarConJoin} elementos={datoscomentariosServicios}/> ? <ComentarioListaTd conjoin={comentarConJoin} elementos={datoscomentariosServicios}/> : ''}
       
    
    </>)
}

export default Conversaciones;
