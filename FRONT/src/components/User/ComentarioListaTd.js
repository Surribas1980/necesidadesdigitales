import {useState} from 'react';

import InsertComentarios from '../../Pages/InsertComentarios';


function ComentarioListaTd(props){
    
    const [respuesta, setRespuesta] = useState("");
    let comentarios = props?.elementos[0];
    console.log('Estoy comentarioslistaTd:... ',comentarios);
    
    

    const enviarRespuesta = ()=>{
        console.log('Esto es lo que envío', respuesta);
    }

    function handleChange(e) {
        setRespuesta(e.target.value);
        console.log('Estoy en la funcion:',respuesta); 
      }

    return (<>
        <h1>Estoy en comentario lista</h1>
        {
                            <tr>
                                <td>Nº de comentario</td>
                                <td>Nº de usuario</td>
                                <td>Nº de servicio</td>
                                <td>Comentario</td>
                            </tr>
        }

        {                   
            comentarios?.map((item)=>{
                return(<>
                            
                            <tr>
                                <td>{item.id_co}</td>
                                <td>{item.id_usu_co}</td>
                                <td>{item.id_ser_co}</td>
                                <td>{item.comentario}</td>
                                <td>Respuesta: 
                                    <div>
                                        <input type="text" name="respuesta" autoComplete="off" value={respuesta} onChange={handleChange} />
                                    </div>
                                </td>
                                <td><button onClick={()=>{enviarRespuesta()}}>Enviar respuesta</button></td>
                    
                            </tr>
                </>)
            })
        }
       
    </>);
    
}

export default ComentarioListaTd;