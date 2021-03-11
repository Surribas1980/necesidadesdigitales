import ComentarioListaTd from "./ComentarioListaTd";
import { deleteService } from '../../http/api';
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
          
      }
      
      
    return (<> 
                <div  
                style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "50px",
                        marginRight: "500px",
                        color: "black"
                    }}
                >

                </div>
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

                            {lista?.map((item)=>{
                                return (<>
                                            
                                            <tr key={item.id_co}>
                                                <td>{item.id_ser}</td>
                                                <td>{item.id_co}</td>                        
                                                <td>{item['buscarUsu(id_usu_co)']}</td>
                                                <td>{item.comentario}</td>                       
                                                <td><button onClick={()=>{irA(item.id_ser)}}>Ir a conversacion</button></td>
                                            </tr>
                                            
                                </>)
                            })}
                    </tbody>
                </table>
    
         {datoscomentariosServicios && <ComentarioListaTd elementos={datoscomentariosServicios}></ComentarioListaTd>}
    
    </>)

};

export default ComentarioListaTr;