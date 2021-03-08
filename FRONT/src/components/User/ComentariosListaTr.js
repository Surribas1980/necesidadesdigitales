import ComentarioListaTd from "./ComentarioListaTd";
import { deleteService } from '../../http/api';
import {useState} from 'react';
function ComentarioListaTr(props){
 
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const lista = props.dato;

      const irA = async (parametro)=>{
          console.log('irA',parametro);
          const data = await deleteService("/comentar",'POST',1,parametro);
          console.log(data['datoscomentariosServicios']);
          setdatoscomentariosServicios(data['datoscomentariosServicios']);
          
      }
      
      
    return (<> 
   
   
                    <tr>
                        <td>Nº de servicio</td>
                        <td>Nº de conversacion</td>
                        <td>Usuario</td>
                        <td>Último comentario realizado</td>
                    </tr>
    {lista?.map((item)=>{
        return (<>
                    
                    <tr>
                        <td>{item.id_ser}</td>
                        <td>{item.id_co}</td>                        
                        <td>{item['buscarUsu(id_usu_co)']}</td>
                        <td>{item.comentario}</td>                       
                        <td><button onClick={()=>{irA(item.id_ser)}}>Ir a conversacion</button></td>
                    </tr>
        </>)
    })}
    <table>
         {datoscomentariosServicios && <ComentarioListaTd elementos={datoscomentariosServicios}></ComentarioListaTd>}
    </table>
    </>)

};

export default ComentarioListaTr;