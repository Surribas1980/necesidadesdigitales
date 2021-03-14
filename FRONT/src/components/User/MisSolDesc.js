import VerArchivos from '../VerArchivos';
import {useState} from 'react';
import {deleteService} from '../../http/api';
export default function MisSolDesc(props){
    
    const servicios = props.nosolucionados;
    const [archivos,setArchivos] = useState();
    const [usuario, setUsuario] = useState(0);
    const [servicio, setServicio] = useState(0);
    const [nombreSolucionador, setNombreSolucionador] = useState("");
    const [valor,setValor]= useState(0);

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
        
        console.log('Esta en enviar')
        let inputs = document.getElementsByTagName("input");
        console.log('tamaño ',inputs.length);
        for(let i = 0;i < inputs.length; i++){
            
            if(inputs[i].checked){
                console.log('non entendo nada',inputs[i+1].value, 'checkeado', inputs[i].checked)

            }

        }

        
    }


    return (<><h3>Posibles soluciones</h3>
    {
        <table id = "checksheet">
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
                            <td><input type="radio" class="r" id="eleccion" name="eleccion"></input></td>
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
    {<button onClick={()=>{setValor(0)}}>Valor 0</button>}
    </>);

}