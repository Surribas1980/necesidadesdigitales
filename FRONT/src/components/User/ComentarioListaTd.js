import {useState} from 'react';

import InsertComentarios from '../../Pages/InsertComentarios';


function ComentarioListaTd(props){
    
    const [respuesta, setRespuesta] = useState([]);
   
    let comentarios = props?.elementos[0];

    const initialState = comentarios.reduce((accumulator, field) => {
        accumulator[field] = '';
        return accumulator;
      }, {});
      const [respuestas, setRespuestas] = useState(initialState);
      const updateAddress = (event, field) => {
        setRespuestas({ ...respuestas, [field]: event.target.value });
        console.log('Estas son las respuestas: ',respuestas);
      };

    console.log('Estoy comentarioslistaTd:... ',comentarios);
    
    

    const enviarRespuesta = (parametro)=>{
        console.log('Esto es lo que envío', parametro);
    }

    function handleChange(e) {
        
        console.log('Estoy en la funcion:',respuestas); 
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
            comentarios?.map((item,index)=>{
                return(<>
                            
                            <tr>
                                <td>{item.id_co}</td>
                                <td>{item.id_usu_co}</td>
                                <td>{item.id_ser_co}</td>
                                <td>{item.comentario}</td>
                                <td>Respuesta: 
                                    <div>
                                        <input type="text" name="respuesta" autoComplete="off" onClick={(event)=>{updateAddress(event,respuesta)}} />
                                    </div>
                                </td>
                                <td><button onClick={(event)=>{updateAddress(event,respuesta)}}>Enviar respuesta</button></td>
                    
                            </tr>
                </>)
            })
        }
       
    </>);
    
}

export default ComentarioListaTd;