import {deleteService} from '../http/api';
import insertComent from '../http/api';
/*import '../css/ComentariosListaTd.css';*/
import { useState,useEffect} from 'react';
import { useParams } from "react-router";
import ComentariosListaParticipo from '../components/User/ComentariosListaParticipo';
function UnaConversacion(){
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const [comentarConJoin,setcomentarConJoin] = useState("");
    const [ver,setVer] = useState(false);
    const {id_ser}= useParams();
    
    

    useEffect(()=>{
        const conv = async ()=>{
            const data = await deleteService("/comentar",'POST',1,id_ser);
            console.log ('datos que entran',data)
            setdatoscomentariosServicios(data['datoscomentariosServicios']);
            setcomentarConJoin(data['comentarConJoin'][0][0]);
            console.log('datos con join en conversaciones',data['comentarConJoin'][0][0])

        }
        conv();
    },[]);
    /*comentarConJoin && comentarConJoin?.map((item)=>{
        console.log('cometarios: ',item)
    })*/
    

   
    return (<>{/*Estoy en UnaConversacion {id_ser}*/}
       
        {/*comentarConJoin && comentarConJoin.length > 0 && <div className="caja">
          <div className="caja">
                {
                    comentarConJoin?.map((item,index)=>{
                        return (<>
                                <div className="caja">
                                    <div className="comienzo">
                                        <div className="caja3">
                                            <div className="caja2">Avatar</div>
                                            <div className="bordear"><img className="imgagen" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.usuario}/${item['foto']}`} alt="imagen"/></div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Comentario</div>
                                            <div className="bordear">{item.uncomentario}</div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Comentario</div>
                                            <div className="bordear">{item.comentario}</div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Avatar</div>
                                            <div className="bordear"><img className="imgagen" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item['T1_foto']}`} alt="imagen"/></div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Selección</div>
                                            <input  type="checkbox" id="eleccion" name="eleccion"></input>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Respuesta</div>
                                            <div className="bordear">
                                                <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </>)
                    })
                }
            </div>
        </div> */}

{datoscomentariosServicios && datoscomentariosServicios.length > 0 &&<ComentariosListaParticipo elementos={datoscomentariosServicios}></ComentariosListaParticipo>}



        {datoscomentariosServicios.length === 0 ? 'No tiene comentarios':''}
       
    </>);
    
}

export default UnaConversacion;