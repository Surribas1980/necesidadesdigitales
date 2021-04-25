import AportarSolucion from './AportarSolucion';
import {useState} from 'react';
import '../../css/Solucion.css';
import { deleteService } from '../../http/api';
import VerArchivos from '../VerArchivos';
export default function Solucion(props){
    const [idServicio,setIdservicio] = useState(0);
    
    const [archivos,setArchivos] = useState();
    const [servicio, setServicio] = useState(0);
    const [verFicheros, setVerFicheros] = useState(false);
    const sinsolucionar = props?.nosolucionados;
    console.log('Estoy en solucion', props?.nosolucionados);

    const aSolucionar = (valor)=>{
        console.log('aSolucionar: ',valor)
        setIdservicio(valor);
    };
    const cojerFicheros = async (Servicio)=>{
        console.log('irA',Servicio);
        const url = `/showfiles/${Servicio}`;
          const data = await deleteService(url,'GET',0,0);
          setArchivos(data);
          
          setServicio(Servicio);
          setVerFicheros(true);
          console.log('Isto é o que recollo', data);
          
    }

    let salida = <>  <div className="tabla1">

    <div className="caja">
        {!sinsolucionar && 0 ? <h1>cargando ddatos</h1>: ''}
        <button onClick={()=>{setVerFicheros(false)}}>Ocultar Ficheros</button>
        <div className="caja">
            {
                sinsolucionar?.map((item,index)=>{

                    return(<>
                                <div className="caja">
                                    <div className="comienzo">
                                        <div className="caja3">
                                            <div className="caja2">Id</div>
                                            <div className="bordear">{item.id_ser}</div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Puntos_User</div>
                                            <div className="bordear">{item['puntos(id_usu_soli)']}</div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">AVATAR</div>
                                            <div className="bordear"><img className="imagenAvatar" src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_soli}/${item.nomFoto_usu}`} alt="imagen" /></div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Alias</div>
                                            <div className="bordear">{item.Solicitador}</div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Titulo</div>
                                            <div className="bordear">{item.titulo_ser}</div>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Explicación</div>
                                            <div className="bordear">{item.expli_ser}</div>
                                        </div>

                                        <div className="caja3">
                                            <div className="caja2">Ficheros</div>
                                            <button onClick={()=>{cojerFicheros(item.id_ser)}}>Ver</button>
                                        </div>
                                        <div className="caja3">
                                            <div className="caja2">Solucionar</div>
                                            <button onClick={()=>{aSolucionar(item.id_ser)}}>Dar solucion</button>
                                        </div>
                                    </div>
                                </div>
                    </>)

                })
            }
        </div>
    </div>
</div>
</>;
    return (<>{!sinsolucionar && salida ? <h1>'Cargando datos'</h1> : salida

    }
    
       {idServicio && <AportarSolucion id={idServicio}></AportarSolucion> ? <AportarSolucion id={idServicio}></AportarSolucion> : " "}
       {verFicheros && <VerArchivos ficheros={archivos}  server={servicio} lugar={'verficheros'}/>}
    </>);
}