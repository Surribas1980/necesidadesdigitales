import {useState} from 'react';
import { useForm } from 'react-hook-form';
import InsertComentarios from '../../Pages/InsertComentarios';
import BotonEnvioComentarios from './BotonEnvioComentarios';

function ComentarioListaTd(props){
    const {register, handleSubmit} = useForm();
    const [respuesta, setRespuesta] = useState([]);
   
    let comentarios = props?.elementos[0];
    
    console.log('Esto son los comentarios: ', comentarios);
    const enviarRespuesta = ()=>{
        
        let x = document.getElementById("respuesta").value;
        console.log('Esto es  x ',x);
        console.log(Object.values(document.getElementById("respuesta").value));
        x="";
        console.log('Esto es  x borrado ',x);
        
        let inputs = document.getElementsByTagName("input");
        let message = "The form has the following input elements with the 'type' attribute = 'text': \n\n";
        console.log ('Tamaños ',inputs.length,comentarios.length)
        

            for (var i = 0; i < inputs.length; i++) {
    
                if (inputs[i].getAttribute('type') == 'text') {
                  // message += inputs[i].tagName + " element with the 'name' attribute = '-->" + inputs[i].value + "este es el valor";
                  // message += inputs[i].getAttribute('name') + "'\n";
                   console.log('Esto es valor ',i,inputs[i].value);
                }
             }
        
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
        <BotonEnvioComentarios funcion={enviarRespuesta}></BotonEnvioComentarios>
    </>);
    
}

export default ComentarioListaTd;