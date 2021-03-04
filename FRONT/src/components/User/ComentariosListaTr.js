import ComentarioListaTd from "./ComentarioListaTd";
import { deleteService } from '../../http/api';
import {useState} from 'react';
function ComentarioListaTr(props){
    const [mostrar, setMostrar] = useState(false);
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [name3, setName3] = useState("");
    const lista = props.dato;
    function handleChange(e) {
        if(e.target.name == "text1"){
           setName(e.target.value); 
           console.log('Estoy en comentarios lista tr, es name:',name);
        }
        if(e.target.name == "text2"){
            setName1(e.target.value);
            console.log('Estoy en comentarios lista tr es name',name1);
        }
        
      }
      const irA = async (parametro)=>{
          console.log('irA',parametro);
          const data = await deleteService("/comentar",'POST',1,parametro);
          console.log(data['datoscomentariosServicios']);
      }
      
      console.log('Tr--Esto es name 1:...',name1,'Esto es name: ',name)
    return (<><p onClick={()=>{setMostrar(!mostrar)}}>Mostrar en comentarios lista Tr</p>
   
                    <tr>
                        <td>Nº de servicio</td>
                        <td>Nº de conversacion</td>
                        <td>Usuario</td>
                        <td>Comentario</td>
                    </tr>
    {mostrar && lista?.map((item)=>{
        return (<>
                    
                    <tr>
                        <td>{item.id_ser}</td>
                        <td>{item.id_co}</td>                        
                        <td>{item['buscarUsu(id_usu_co)']}</td>
                        <td>{item.comentario}</td>
                        <td>Respuesta: 
                            <div>
                                <input type="text" name="text3" autoComplete="off" value={name3} onChange={handleChange} />
                            </div>
                        </td>
                        <td><button onClick={()=>{irA(item.id_ser)}}>Ir a conversacion</button></td>
                    </tr>
        </>)
    })}


    {mostrar && <> <input type="text" name="text1" autoComplete="off" value={name} onChange={handleChange} /> 
    <input type="text" name="text2" autoComplete="off" value={name1} onChange={handleChange} /></>}

    </>)

};

export default ComentarioListaTr;