import ComentarioListaTd from "./ComentarioListaTd";
import { deleteService,descartarServicio } from '../../http/api';
import {useState} from 'react';
function ComentarioListaTr(props){
 
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const lista = props.dato;



      const irA = async (parametro)=>{
          console.log('irA',parametro);
          const data = await deleteService("/comentar",'POST',1,parametro);
          console.log('Isto é o que recollo', data);
          console.log('isto é o que estou a pasar: ',data['datoscomentariosServicios']);
          setdatoscomentariosServicios(data['datoscomentariosServicios']);
          descartarServicio(`/avisos/${parametro}`,'POST');
          
      }
      
      
    return (<> 
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nº de servicio</th>
                            <th>Nº de conversacion</th>
                            <th>Usuario</th>
                            <th>Último comentario realizado</th>
                        </tr>

                    </thead>
                    <tbody>

                            {lista?.map((item,index)=>{
                                return (<>
                                            
                                            <tr>
                                                <td  key={index+1}>{item.id_ser}</td>
                                                <td  key={index+2}>{item.id_co}</td>                        
                                                <td  key={index+3}>{item['buscarUsu(id_usu_co)']}</td>
                                                <td  key={index+4}>{item.comentario}</td>                       
                                                <td  key={index+5}><button onClick={()=>{irA(item.id_ser)}}>Ir a conversacion</button></td>
                                            </tr>
                                            
                                </>)
                            })}
                    </tbody>
                </table>
    
         {datoscomentariosServicios && <ComentarioListaTd elementos={datoscomentariosServicios}></ComentarioListaTd>}
    
    </>)

};

export default ComentarioListaTr;