import BotonEnvioComentarios from './BotonEnvioComentarios';
import insertComent from '../../http/api';
import '../../css/ComentariosListaTd.css';
import {useState} from 'react';
function ComentarioListaParticipo(props){
  const [ver,setVer] = useState(false);
    let comentarios = props?.elementos[0];
    
    comentarios?.map((item)=>{
        console.log('cometarios: ',comentarios)
    })
    const enviarRespuesta = ()=>{
        let inputs = document.getElementsByTagName("input");
       


        
        for (let i = 0; i < inputs.length; i++) {
               
            if(inputs[i].checked ){
                
               // console.log('buscando',i, inputs[i].value, 'la respuesta',i+1, inputs[i+1].value,'el nº de comentario',inputs[i+2].value, 'servicio', inputs[i+3].value)
                let comentario= inputs[i+1].value;
                let idComentario = inputs[i+2].value;
                let id_ser = inputs[i+3].value;
                
                insertComent('/users/insert/comentario/',id_ser,idComentario,comentario);
            }
               
                
            }
        
    }

   
    return (<>
       
        {
            <div className="tabla">
                
                
                <div className="caja">
                    <div className="caja">
                        {
                            comentarios?.map((item,index)=>{
                                return (<>
                                        <div className="caja">
                                            <div className="comienzo">
                                                {/*<div className="caja3">
                                                    <div className="caja2">Nºdecomentario</div>
                                                    <div className="bordear">{item.id_co}</div>
                                                </div>*/}
                                                <div className="caja3">
                                                    {/*<div className="caja2">AVATAR</div>*/}
                                                    <div className="bordear"><img className="imgagen2" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item.nomFoto_usu}`} alt="imagen"/></div>
                                                    <div className="bordear">{item.comentario}</div>
                                                    <button onClick={()=>{setVer(!ver)}}>Responder</button>
                                                        {
                                                            ver && <><input value={'true'} type="checkbox" id="eleccion" name="eleccion"></input>
                                                            <div className="bordear"> 
                                                                <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                                <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                                <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
                                                            </div></>
                                                        }
                                                </div>
                                                {/*<div className="caja3">
                                                    <div className="caja2">Comentario</div>
                                                    <div className="bordear">{item.comentario}</div>
                                                    <div className="caja3">
                                                        
                                                        {/*<button onClick={()=>{setVer(!ver)}}>Responder</button>
                                                        {
                                                            ver && <><input  type="checkbox" id="eleccion" name="eleccion"></input>
                                                            <div className="bordear"> 
                                                                <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                                <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                                <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
                                                            </div></>
                                                        }
                                                        <input  type="checkbox" id="eleccion" name="eleccion"></input>
                                                        <div className="bordear"> 
                                                            <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                            <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                            <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
                                                        </div>
                                                    </div>
                                                </div>*/}
                                                

                                                {/*<div className="caja3">
                                                    <div className="caja2">RespuestaNºcomentario</div>
                                                    <div className="bordear">{item.id_co_num}</div>
                                                </div>*/}
                                                {/*s<div className="caja3">
                                                    <div className="caja2">Selección</div>
                                                    <input  type="checkbox" id="eleccion" name="eleccion"></input>
                                                </div>*/}
                                                {/*<div className="caja3">
                                                    <div className="caja2">Responder</div>
                                                   
                                                    <input  type="checkbox" id="eleccion" name="eleccion"></input>
                                                    <div className="bordear"> 
                                                        <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                        <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                        <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
                                                    </div>
                                                </div>*/}
                                                <div className="caja3">

                                                    {comentarios?.map((valor,index)=>{
                                                        let salida = <>
                                                            <div className="caja3">
                                                            
                                                        <div className="caja3">
                                                            {/*<div className="caja2">Comentario</div>*/}
                                                            <div className="bordear">

                                                                    <div className="imgagen2">

                                                                        <img key={index} src={`http://localhost:4000/imagenes/fotousuario${valor.id_usu_co}/${valor.nomFoto_usu}`} alt="imagen"/></div>
                                                                        {valor.comentario}
                                                                    </div>

                                                            </div>
                                                        </div>
                                                        </>;
                                                        return(<>
                                                                    {(item.id_co === valor.id_co_num) ? 
                                                                        console.log('respuesta ',valor.comentario)  : console.log('¿nueva conversacion? ')
                                                                    
                                                                    }
                                                                    {(item.id_co === valor.id_co_num) ? salida : '' 

                                                                    }
                                                                </>)},
                                                                [item.id_co_num,item.id_co])
                                                    }
                                                </div>
                                            </div>


                                        </div>
                                    

                                </>)
                            })
                        }
                    </div>
                </div>
                
            </div>
        }





        <BotonEnvioComentarios funcion={enviarRespuesta}></BotonEnvioComentarios>
    </>);
    
}

export default ComentarioListaParticipo;