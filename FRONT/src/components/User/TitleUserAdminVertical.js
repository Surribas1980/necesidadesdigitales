import { Link } from 'react-router-dom';
import {useState} from 'react';
import useAuth from '../../shared/hooks/useAuth';
import '../../css/TitleUserAdminVertical.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight,faHome,faSignOutAlt,faTrashAlt,faPenAlt} from '@fortawesome/free-solid-svg-icons';
import ComentariosMenuVertical from '../ComentariosMenuVertical';

function TitleUserAdminVertical(props){
    const { isUserLogged, logOut } = useAuth(false);
    const [mostrar,setMostrar]=useState(false);
    
    const datos = props?.datosusuario;
    console.log('la foto:',datos);

    

const salida =<><div className="navegacionvertical">

                <ul>
                {
                            datos?.map((item,index)=>{
                                return(<>
                                
                        <img className="imagen" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu}/${item.nomFoto_usu}`} alt="imagen"/>
                                </>)
                            })
                        }
                    <div className="header-item">
                    <Link to = "/useradmin"><FontAwesomeIcon icon={faHome} /></Link>
                        
                    </div>
                    <div className="header-item" >
                        <Link to = "/comentario"><div className="paracometarios"><FontAwesomeIcon  icon={faAngleRight} /><div onClick={()=>{setMostrar(!mostrar)}}>Comentarios</div></div></Link>
                        
                        
                                        {mostrar && <ComentariosMenuVertical></ComentariosMenuVertical>}
                                  
                    </div>
                    <div onClick={()=>{setMostrar(false)}} className="header-item">

                    <Link to = "/datospersonales"><FontAwesomeIcon icon={faAngleRight} />Modificacion de datos personales</Link>
                    </div>
                    <div onClick={()=>{setMostrar(false)}} className="header-item">

                    <Link to= "/darpuntuacion"><FontAwesomeIcon icon={faAngleRight} />Mis servicios</Link>
                    </div>
                    <div onClick={()=>{setMostrar(false)}} className="header-item">

                        <Link to= "/solucionados"><FontAwesomeIcon icon={faAngleRight} />Servicios Solucionados</Link>
                    </div>
                    <div onClick={()=>{setMostrar(false)}} className="header-item">

                    <Link to= "/darsolucion"><FontAwesomeIcon icon={faAngleRight} />Servicios no solucionados</Link>
                    </div>
                    <div className="header-item">

                    <Link to="/borrar/misservicios"><FontAwesomeIcon icon={faAngleRight} /><FontAwesomeIcon icon={faTrashAlt} />Borrar mis servicios</Link>
                    </div>
                    <div onClick={()=>{setMostrar(false)}} className="header-item">

                    <Link to="/insert/servicios"><FontAwesomeIcon icon={faAngleRight} /><FontAwesomeIcon icon={faPenAlt} />Insertar servicios</Link>
                    </div>
                    
                    <div onClick={()=>{setMostrar(false)}} className="salir">

                    <FontAwesomeIcon onClick={logOut} icon={faSignOutAlt}></FontAwesomeIcon>
                    </div>
                   
                </ul>
                
                
                
                

                
                
                </div>
        </>;

    return (<>{isUserLogged && salida}</>)
}

export default TitleUserAdminVertical;