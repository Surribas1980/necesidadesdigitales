import {BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { useState} from 'react';
import {deleteService} from '../../http/api';
import ComentarioListaTd from './ComentarioListaTd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify, faComments} from '@fortawesome/free-solid-svg-icons';
import '../../css/MisServiSoliUserAdmin.css';

export default function MisServiSoliUserAdmin(props){
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const [comentarConJoin,setcomentarConJoin] = useState("");
    const misservicios = props?.misservis;
const irA = async (id)=>{
    console.log('pasado',id);
    const data = await deleteService("/comentar",'POST',1,id);
    console.log ('datos que entran',data)
    setdatoscomentariosServicios(data['datoscomentariosServicios']);
    setcomentarConJoin(data['comentarConJoin'][0][0]);
    console.log('datos con join en conversaciones',data['comentarConJoin'][0][0])

}
    return (<>
    <Router>

        <table>
            <tbody>
    
                <tr>
                    <th>Nº de servicio</th>
                    <th>Titulo servicio</th>
                    <th>Explicación del servicio</th>
                    
                </tr>
    
            {
                misservicios?.map((item,index)=>{
                    return(<>
                                <tr>
                                        <td>{item.id_ser}</td>                                       
                                        <td><Link onClick={()=>{irA(item.id_ser)}} >{item.titulo_ser}</Link></td>
                                        <td>{item.expli_ser}</td>
                                </tr>
    
                    </>);
                })
            }
            </tbody>
    
        </table>
        <div className="caja">

            {
                    misservicios?.map((item,index)=>{
                        return(<>
                            <div className="caja">
                                    <div className="comienzo">                                   
                                                    <div className="caja1">
                                                        <Link><FontAwesomeIcon onClick={()=>{irA(item.id_ser)}} icon={faComments}></FontAwesomeIcon></Link> 
                                                    </div>
                                                    <div className="caja3"><div className="caja2">Id</div><input className="entrada" value={item.id_ser} readOnly></input> </div>
                                                    <div className="caja3"><div className="caja2">Titulo</div><input className="entrada" value={item.titulo_ser} readOnly></input></div>
                                                    <div className="caja3"><div className="caja2">Explicacion</div><textarea className="entrada"  value={item.expli_ser} readOnly></textarea></div>

                                    </div>
                            </div>
                        </>);
                    })
                }
        </div>
        <hr></hr>
        <hr></hr>
        {comentarConJoin.length !== 0 ? <ComentarioListaTd conjoin={comentarConJoin} elementos={datoscomentariosServicios}></ComentarioListaTd> : <p>{'No tiene conversaciones'}</p> }
    </Router>
        </>);

}