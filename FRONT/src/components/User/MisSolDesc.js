import VerArchivos from '../VerArchivos';
import {useState} from 'react';
import {deleteService,votarServicio} from '../../http/api';
import '../../css/MisServiSoliUserAdmin.css';
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
     servicios.length > 0 &&   <div className="caja">
            <div className="caja">
                {
                    servicios?.map((item,index)=>{
                        return(<>
                                <input id="id_ser" type="hidden" name="id_ser" value={item.id_ser} />
                                <input id="id_usu_sol" type="hidden" name="id_usu_sol" value={item.id_usu_sol} />
                                <input id="id_usu_soli" type="hidden" name="id_usu_soli" value={item.id_usu_soli} />
                                <div className="comienzo">                
                                    <div className="caja3">
                                        <div className="caja2">Titulo</div>
                                        <div className="bordear">{item.titulo_ser}</div>
                                    </div>
                                    <div className="caja3">
                                        <div className="caja2">Solucionador</div>
                                        <div className="bordear">{item.Solucionador}</div>
                                    </div>
                                    <div className="caja3">
                                            <div className="caja2">Avatar</div>
                                            <div>
                                                <img className="imgagen"src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_sol}/${item['buscarFoto(id_usu_sol)']}`} alt="" />
                                            </div>
                                    </div>
                                    <div className="caja3">
                                            <div className="caja2">Solución</div>
                                            <button onClick={()=>{irA(item.id_ser,item.id_usu_sol,item.Solucionador)}}>ver</button>
                                    </div>
                                    <div className="caja3">
                                            <div className="caja2">Elección</div>
                                            <input type="radio" id="eleccion" name="eleccion"></input>
                                    </div>
                                    <div className="caja3">
                                            <div className="caja2">Puntuación</div>
                                            <input type="number" id="puntuacion" name="puntuacion"></input>
                                    </div>
                                </div>
                        </>);
                    })
                }
            </div>
        </div>
    }
    {servicios.length > 0 && <button onClick={()=>{enviar()}}>Votar</button>}
    {servicios.length > 0 && archivos && <VerArchivos lugar={'solucionados'} ficheros={archivos} user={usuario} server={servicio} nombre={nombreSolucionador}></VerArchivos>}
    
    </>);

}