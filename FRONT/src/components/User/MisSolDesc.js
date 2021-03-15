import VerArchivos from '../VerArchivos';
import {useState} from 'react';
import {deleteService,votarServicio} from '../../http/api';
export default function MisSolDesc(props){
    
    const servicios = props.nosolucionados;
    const [archivos,setArchivos] = useState();
    const [usuario, setUsuario] = useState(0);
    const [servicio, setServicio] = useState(0);
    const [nombreSolucionador, setNombreSolucionador] = useState("");
    
    console.log('servicios',servicios)

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

   

    const enviar = () =>{

        let puntuacion;
        let eleccion;
        
        //console.log('Esta en enviar')
        let inputs = document.getElementsByTagName("input");
        //console.log('tamaño ',inputs.length);
        for(let i = 0;i < inputs.length; i++){
            //console.log('buscando',i, inputs[i].value)
            if(inputs[i].checked){
                console.log('puntuacion',inputs[i+1].value, 'checkeado', inputs[i].checked);
                console.log('servicio',inputs[i-3].value,'solucionador',inputs[i-2].value)
                const url = `/servicios/votar/${inputs[i-3].value}/${inputs[i-2].value}`;
                const data = votarServicio(url,inputs[i+1].value);
                console.log('esto es lo que responde',data)
            }

        }

        
    }


    return (<>
    {
        <table>
            <thead>
                <tr>
                    <th>Fecha de aportación</th>
                    <th>Titulo del servicio</th>
                    <th>Usuario que aporta solución</th>
                    <th>Avatar</th>
                    <th>Ver solución</th>
                    <th>Eleccion</th>
                    <th>Puntuacion</th>
                </tr>
            </thead>
            <tbody>
                {
                    servicios?.map((item)=>{
                        return (<>
                        <tr>
                            <td>
                                {item.fecha_ser_ini}
                                <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser} />
                                <input id="id_usu_sol" type="hidden" name="id_usu_sol" value={item.id_usu_sol} />
                                <input id="id_usu_soli" type="hidden" name="id_usu_soli" value={item.id_usu_soli} />
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
                            <td><input type="radio" id="eleccion" name="eleccion"></input></td>
                            <td><input type="number" id="puntuacion" name="puntuacion"></input></td>
                        </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
    }
    {<button onClick={()=>{enviar()}}>Votar</button>}
    {archivos && <VerArchivos ficheros={archivos} user={usuario} server={servicio} nombre={nombreSolucionador}></VerArchivos>}
    
    </>);

}