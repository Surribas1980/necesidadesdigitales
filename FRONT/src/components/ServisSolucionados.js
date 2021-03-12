import { deleteService } from '../http/api';
import {useState} from 'react';
import VerArchivos from './VerArchivos';

function ServisSolucionados(props){
    const [archivos,setArchivos] = useState();
    const [usuario, setUsuario] = useState(0);
    const [servicio, setServicio] = useState(0);
    const [nombreSolucionador, setNombreSolucionador] = useState("");
    const lista = props?.servissolucionados;
    lista?.map((item)=>{return console.log('valores: ',item)})

    const irA = async (Servicio,Solucionador,nombreSolucionador)=>{
        console.log('irA',Servicio,Solucionador);
        const url = `/archivos/solucionados/${Servicio}/${Solucionador}`;
          const data = await deleteService(url,'GET',0,0);
          setArchivos(data);
          setUsuario(Solucionador);
          setServicio(Servicio);
          setNombreSolucionador(nombreSolucionador);
          console.log('Isto é o que recollo', data);
          
    }

    return (<>

    <h2>Estoy en servicios solucionados</h2>
    {

        
            <table>
                <thead>
                    <tr>
                        <th>Lo solicita</th>
                        <th>Lo soluciona</th>
                        <th>Avatar quien lo solicita</th>
                        <th>Avatar quien lo soluciona</th>
                        <th>Titulo del servicio</th>
                        <th>Puntución dada</th>
                        <th>Ver archivos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista?.map((item)=>{
                            return (<>
                            <tr>
                                <td>
                                    {item.Solicitador}
                                </td>
                                <td>
                                    {item.Solucionador}
                                </td>
                                <td>
                                <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_soli}/${item['buscarFoto(id_usu_soli)']}`} alt=""/>
                                </td>
                                <td>
                                <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_sol}/${item['buscarFoto(id_usu_sol)']}`} alt="" />
                                
                                </td>
                                <td>
                                    {item.titulo_ser}
                                </td>
                                <td>
                                    {item.puntuacion}
                                </td>
                                <th><button onClick={()=>{irA(item.id_ser,item.id_usu_sol,item.Solucionador)}}>ver</button></th>
                            </tr>
                            </>)
                        })
                    }
                </tbody>
            </table>
    }
    
    {archivos && <VerArchivos ficheros={archivos} user={usuario} server={servicio} nombre={nombreSolucionador}></VerArchivos>}
    </>)
};

export default ServisSolucionados;