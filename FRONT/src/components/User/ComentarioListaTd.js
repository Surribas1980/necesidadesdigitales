import BotonEnvioComentarios from './BotonEnvioComentarios';
import insertComent from '../../http/api';
import '../../css/ComentariosListaTd.css';

function ComentarioListaTd(props){
  
    let comentarios = props?.elementos[0];
    let conjoin = props?.conjoin;
    console.log('en comentarios lista', conjoin)
    /*conjoin?.map((item)=>{
        console.log('con join', item);
    })*/
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
       
        { conjoin.length > 0 && <div className="caja">
          <div className="caja">
                {
                    conjoin?.map((item,index)=>{
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
        </div> }
        <BotonEnvioComentarios funcion={enviarRespuesta}></BotonEnvioComentarios>
    </>);
    
}

export default ComentarioListaTd;