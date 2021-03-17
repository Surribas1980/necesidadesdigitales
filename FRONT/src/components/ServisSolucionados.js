import { deleteService, descartarServicio } from '../http/api';
import {useState} from 'react';
import VerArchivos from './VerArchivos';

function ServisSolucionados(props){
    let [foto,setFoto] = useState('');
    const [archivos,setArchivos] = useState();
    const [usuario, setUsuario] = useState(0);
    const [servicio, setServicio] = useState(0);
    const [nombreSolucionador, setNombreSolucionador] = useState("");
    const lista = props?.servissolucionados;
    lista?.map((item)=>{return console.log('valores: ',item)});

    /*const descartar = ()=>{
        let inputs = document.getElementsByTagName("input");
        //console.log('tamaño ',inputs.length);
        for(let i = 0;i < inputs.length; i++){
            console.log('buscando',i, inputs[i].value)
            if(inputs[i].checked){
                console.log( 'checkeado', inputs[i].checked);
                console.log('servicio',inputs[i-3].value,'solucionador',inputs[i-2].value)
                const url = `/servicios/descartarsolucion/${inputs[i-3].value}/${inputs[i-2].value}`;
                const data = descartarServicio(url,'POST');
                /*console.log('esto es lo que responde',data)
            }

        }
    }*/

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
                        lista?.map((item,index)=>{
                            return (<>
                            <tr>
                                
                                <td>
                                    <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser} />
                                    <input id="id_usu_sol" type="hidden" name="id_usu_sol" value={item.id_usu_sol} />
                                    <input id="id_usu_soli" type="hidden" name="id_usu_soli" value={item.id_usu_soli} />
                            
                                    {item.Solicitador}
                                </td>
                                <td>
                                    {item.Solucionador}
                                </td>
                                <td>
                                    
                                <img key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_soli}/${item.nomFoto_usu}`} alt=""/>
                                </td>
                                <td>
                                <img key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_sol}/${item['buscarFoto(id_usu_sol)']}`} alt="" />
                                
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