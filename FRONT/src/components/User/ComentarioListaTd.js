import {useState} from 'react';
import { useForm } from 'react-hook-form';
import InsertComentarios from '../../Pages/InsertComentarios';
import BotonEnvioComentarios from './BotonEnvioComentarios';

function ComentarioListaTd(props){
    const {register, handleSubmit} = useForm();
    const [respuesta, setRespuesta] = useState([]);
   
    let comentarios = props?.elementos[0];

    const initialState = comentarios.reduce((accumulator, field) => {
        accumulator[field] = '';
        return accumulator;
      }, {});
      const [respuestas, setRespuestas] = useState(initialState);
      const updateAddress = (field,event) => {
        setRespuestas({ ...respuestas, [field]: event.target.value });
        console.log('Estas son las respuestas: ',respuestas);
      };

    console.log('Estoy comentarioslistaTd:... ',comentarios);
    
    const onSubmit = (data)=>{
        console.log('estos son los datos enviados desde el formulario ', data.respuesta );
        console.log(`Esto es el formulario ${data.respuesta}`)
        console.log('Esto es data',data)
    }
    

    const enviarRespuesta = ()=>{
        
        let x = document.getElementById("respuesta").value;
        console.log('Esto es  x ',x);
        console.log(Object.values(document.getElementById("respuesta").value));
        x="";
        console.log('Esto es  x borrado ',x);
        
        let inputs = document.getElementsByTagName("input");
        let message = "The form has the following input elements with the 'type' attribute = 'text': \n\n";
        for (var i = 0; i < inputs.length; i++) {

            if (inputs[i].getAttribute('type') == 'text') {
               message += inputs[i].tagName + " element with the 'name' attribute = '-->" + inputs[i].value + "este es el valor";
               message += inputs[i].getAttribute('name') + "'\n";
               console.log('Esto es nuevo: ', message);
            }
         }
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
                                        <input id="respuesta" type="text" name="respuesta" autoComplete="off" />
                                    </div>
                                    
                                </td>
                               
                    
                            </tr>
                            
                </>)
            })
        }
        <h3>Esto es el formulario</h3>
        {
            /*comentarios?.map((item)=>{
               return (<>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="respuesta">HOLA Respuesta</label>
                <input id="respuesta" ref={register({required: false})} name="respuesta" ></input>
                <button>Enviar</button>
                </form>
               </>); 
            })*/
        }
        <BotonEnvioComentarios funcion={enviarRespuesta}></BotonEnvioComentarios>
    </>);
    
}

export default ComentarioListaTd;