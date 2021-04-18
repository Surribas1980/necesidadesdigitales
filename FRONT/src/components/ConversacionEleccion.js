import {Link,useRouteMatch} from 'react-router-dom';
import { useState,useEffect} from 'react';
import {deleteService} from '../http/api';
import ComentarioListaTd from './User/ComentarioListaTd';
import '../css/ComentariosListaTd.css';
function Conversaciones(props){
    let match = useRouteMatch();
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const [comentarConJoin,setcomentarConJoin] = useState("");
    const [numConversacion,setConversacion] = useState(0);
    const [verConversaciones, setverConversaciones] = useState(false);
    const conversacion = props.convergeneral;

    /*const irA = async (id_ser)=>{    
        console.log('esto es el id_ser',id_ser)    
        const data = await deleteService("/comentar",'POST',1,id_ser);
        console.log ('datos que entran',data)
        setdatoscomentariosServicios(data['datoscomentariosServicios']);
        setcomentarConJoin(data['comentarConJoin'][0][0]);
        console.log('datos con join en conversaciones',data['comentarConJoin'][0][0])

    }*/


    return (<><hr></hr>
       
        <hr></hr>
        <div className="caja">
            <div className="caja">
            {
                    conversacion?.map((item,index)=>{
                        if(index === numConversacion){

                            return (<><h3>Esta es la conversación {index + 1}ª de {conversacion.length}</h3>
                            <div className="caja">
                                
                                <div className="comienzo">
                                    {/*<div className="caja3">
                                        <div className="caja2">Id</div>
                                        <div className="bordear">{item.id_ser}</div>
                                    </div>*/}
                                    <div className="caja3">
                                        {/*<div className="caja2">Alias</div>*/}
                                        <div className="bordear"><img className="imgagen" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item.nomFoto_usu}`} alt="imagen"/></div>
                                        <div className="bordear">{item.nom_usu}</div>
                                        {/*<div className="caja2">Comentario</div>*/}
                                        <Link to={`/useradmin${match.url}unaconversacion/${item.id_ser}`}><div className="bordear">{item.comentario}</div></Link>
                                    </div>
                                
                                    {/*
                                    <div className="caja3">
                                    </div>

                                    <div className="caja3">
                                        <div className="caja2">Fecha</div>
                                        <div className="bordear">{item.fecha}</div>
                                    </div>*/}
                                    {/*<div className="caja3">
                                        <div className="caja2">Conversación</div>
                                        <button onClick={()=>{irA(item.id_ser);setverConversaciones(true);}}>Ver</button>
                                    </div>*/}
                                </div>
                            
                            </div>
                            <div className="botones">
                                <button onClick={()=>{
                                    if(numConversacion > 0){
                                        const valor = numConversacion -1;
                                        setConversacion(valor);
                                    }
                                    setverConversaciones(false);
                                }}>{'<'}</button>
                                <button onClick={()=>{
                                    if(numConversacion < conversacion.length - 1){
                                        const valor = numConversacion + 1;
                                        setConversacion(valor);
                                    }
                                    setverConversaciones(false);
                                }}>{'>'}</button>
                            </div>   
                            </>)
                        }
                    })
                }
            </div>
        </div>
            {/*verConversaciones && comentarConJoin.length !==0 && <ComentarioListaTd conjoin={comentarConJoin} elementos={datoscomentariosServicios}/> ? <ComentarioListaTd conjoin={comentarConJoin} elementos={datoscomentariosServicios}/> : <p>{'Si pulsas en el comentario y no aparece conversación es que el usuario que ha solicitado el servicio no le respondió'}</p>*/}
       
    
    </>)
}

export default Conversaciones;
