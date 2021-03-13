import VerArchivos from '../VerArchivos';
import {useState} from 'react';
import {deleteService} from '../../http/api';
export default function MisSolDesc(props){
    const servicios = props.nosolucionados;
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

    return (<><h3>Posibles soluciones</h3>
    {
        <table>
            <thead>
                <tr>
                    <th>Fecha de aportación</th>
                    <th>Titulo del servicio</th>
                    <th>Usuario que aporta solución</th>
                    <th>Avatar</th>
                    <th>Ver solución</th>
                </tr>
            </thead>
            <tbody>
                {
                    servicios?.map((item)=>{
                        return (<>
                        <tr>
                            <td>
                                {item.fecha_ser_ini}
                            </td>
                            <td>
                             {item.titulo_ser}
                            </td>
                            <td>
                                {item['buscarUsu(id_usu_sol)']}
                            </td>
                            <td>
                            <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_sol}/${item['buscarFoto(id_usu_sol)']}`} alt="" />
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
    
    </>);

}