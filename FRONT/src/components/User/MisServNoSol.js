import VerArchivos from '../VerArchivos';
import {useState} from 'react';
import {deleteService} from '../../http/api';
export default function MisServNoSol(props){

    const misservisdescart = props.descartadas;
    const [archivos,setArchivos] = useState();
    const [usuario, setUsuario] = useState(0);
    const [servicio, setServicio] = useState(0);
    const [nombreSolucionador, setNombreSolucionador] = useState("");

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
    {
        <table>
            <thead>
                <th>Avatar</th>
                <th>Solucionador</th>
                <th>Titulo del servicio</th>
                <th>Explicacion del servicio</th>
                <th>Ver solución descartada</th>
            </thead>
            <tbody>
                {
                    misservisdescart?.map((item) =>{
                        return(<>

                                    <tr>
                                            <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser} />
                                            <input id="id_usu_sol" type="hidden" name="id_usu_sol" value={item.id_usu_sol} />
                                            <input id="id_usu_soli" type="hidden" name="id_usu_soli" value={item.id_usu_soli} />
                                        <td>
                                        <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_sol}/${item['buscarFoto(id_usu_sol)']}`} alt="" />
                                            
                                        </td>
                                        <td>
                                            {item.Solucionador}
                                        </td>
                                        <td>
                                        {item.titulo_ser}
                                        </td>
                                        <td>
                                            {item.expli_ser}
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
}