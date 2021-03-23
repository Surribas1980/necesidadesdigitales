import BotonEnvioComentarios from './BotonEnvioComentarios';
import insertComent from '../../http/api';
import '../../css/ComentariosListaTd.css';

function ComentarioListaTd(props){
  
    let comentarios = props?.elementos[0];
    
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
            <table>
                <thead>
                            <tr>
                                <th>Nº de comentario</th>
                                <th>Nº de usuario</th>
                                <th>AVATAR</th>
                                <th>Nº de servicio</th>
                                <th>Comentario</th>
                                <th>Respuesta al comentario Nº</th>
                                <th>Selección</th>
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
                                                <img className="miAvatar" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_co}/${item.nomFoto_usu}`} alt="imagen"/>
                                            </td>
                                            <td>{item.id_ser_co}</td>
                                            <td>{item.comentario}</td>
                                            <td>{item.id_co_num}</td>
                                            <td><input  type="checkbox" id="eleccion" name="eleccion"></input></td>
                                            <td>
                                                <div>
                                                    <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                                    <input id="idConversacion" type="hidden" name="idConversacion" value={item.id_co} />
                                                    <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser_co} />
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