import {useState} from 'react';
import { useForm } from 'react-hook-form';
import InsertComentarios from '../../Pages/InsertComentarios';


function ComentarioListaTd(props){
    const {register, handleSubmit} = useForm();
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
    
    const onSubmit = (data)=>{
        console.log('estos son los datos enviados desde el formulario ', data.respuesta );
        console.log(`Esto es el formulario ${data.respuesta}`)
        console.log('Esto es data',data)
    }
    

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
                                <td>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="respuesta">Respuesta desde el formulario</label>
                                    <input id="respuesta" ref={register({required: false})} name="respuesta" ></input>
                                    <button>Enviar</button>
                                    </form>
                                </td>
                    
                            </tr>
                </>)
            })
        }
        <h3>Esto es el formulario</h3>
        {
            comentarios?.map((item)=>{
               return (<>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="respuesta">HOLA Respuesta</label>
                <input id="respuesta" ref={register({required: false})} name="respuesta" ></input>
                <button>Enviar</button>
                </form>
               </>); 
            })
        }
    </>);
    
}

export default ComentarioListaTd;