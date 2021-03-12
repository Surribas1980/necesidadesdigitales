import BotonEnvioComentarios from './BotonEnvioComentarios';
import insertComent from '../../http/api';
import '../../css/ComentariosListaTd.css';

function ComentarioListaTd(props){
  
    let comentarios = props?.elementos[0];
    
    const enviarRespuesta = ()=>{
        let inputs = document.getElementsByTagName("input");
        let id_ser=0;
        let idComentario=null;
        let comentario= undefined;
        for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].getAttribute('type') == 'text') {
                    if(inputs[i].value !== ''){
                        
                        comentario = inputs[i].value;
                        //console.log('Esto es el comentario ',inputs[i].value);
                   }
                }
               
                if(inputs[i].getAttribute('name') == 'id_ser'){
                    id_ser = inputs[i].value;
                   // console.log('id_ser ',inputs[i].value);
                    if(inputs[i].value){

                    }
                }
                if(inputs[i].getAttribute('name') == 'idConversacion'){
                    //console.log('id_co ',inputs[i].value); 
                    idComentario = inputs[i].value;
                   // console.log('idComentario: ', idComentario);
                    if(inputs[i].value){
                    }
                }
                if( comentario !== undefined && id_ser !== 0 && idComentario !== null){
                    console.log('entrando',comentario,idComentario,id_ser);
                    let valor = 1;
                    console.log('hola')
                    insertComent('/users/insert/comentario/',id_ser,idComentario,comentario);
                    if(valor){
                        console.log('hola')
                        valor = 0;
                    }
                    
                    comentario = undefined;
                }
            }
        
    }

   
    return (<>
       
        {
            <table>
                <thead>
                            <tr>
                                <th>Nº de comentario</th>
                                <th>Nº de usuario</th>
                                <th>AVATAR</th>
                                <th>Nº de servicio</th>
                                <th>Comentario</th>
                                <th>Respuesta al comentario Nº</th>
                                <th>Responder</th>
                            </tr>
            </thead>
            <tbody>
                
                {                   
                    comentarios?.map(
                        (item,index)=>
                        {
                            return(<>
                                        
                                        <tr>
                                            <td>{item.id_co}</td>
                                            <td>{item.id_usu_co}</td>
                                            <td>
                                                <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item.nomFoto_usu}`} />
                                            </td>
                                            <td>{item.id_ser_co}</td>
                                            <td>{item.comentario}</td>
                                            <td>{item.id_co_num}</td>
                                            <td>
                                                <div>
                                                    <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                    <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
                                                    <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                </div>
                                                
                                            </td>
                                           
                                
                                        </tr>
                                        
                            </>)
                        })
                 }
            </tbody>
            </table>
            
            
        }

        <BotonEnvioComentarios funcion={enviarRespuesta}></BotonEnvioComentarios>
    </>);
    
}

export default ComentarioListaTd;