import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import TitleUserAdminVertical from './TitleUserAdminVertical';
import '../../css/TitleUserAdmin.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserEdit,faCommentDots,faTasks,faMedal,faSchool,faUpload,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import ComentariosMenuVertical from '../ComentariosMenuVertical';

function TitleUserAdmin(props){
    const { isUserLogged, logOut } = useAuth(false);
    
    const datos = props?.datosusuario;
    
    console.log('la foto:',datos);

const salida =<><nav>
    <div className="encoller">

                <div className="header-item">
                
                <Link to="/useradmin">Recoger</Link>
                </div>

                <div className="header-item">
                    <div className="user">
                        <Link to = "/comentario"><FontAwesomeIcon icon={faCommentDots} /></Link>
                        <div>Comentarios</div>
                        
                        <div className="externo">
                            <div className="interno">
                                <div className="externo">
                                    <div className="interno">
                                        <ComentariosMenuVertical />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="header-item">

                    <div className="user">
                        <Link to = "/datospersonales"><FontAwesomeIcon icon={faUserEdit} /></Link>
                        <div>Editar</div>
                    </div>
                </div>
                <div className="header-item">
                    <div className="user">
                        <Link to= "/darpuntuacion"><FontAwesomeIcon icon={faTasks}/></Link>
                        <div>Mis servicios</div>
                    </div>
                </div>

                <div className="header-item">
                    <div className="user">
                        <Link to="/ranking"><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></Link>
                        <div>Ranking</div>
                    </div>
                </div>


                <div className="header-item">
                    <div className="user">
                        <Link to= "/solucionados"><FontAwesomeIcon icon={faSchool}></FontAwesomeIcon></Link>
                        <div>Servicios Solucionados</div>
                    </div>
                </div>
                <div className="header-item">
                    <div className="user">
                        <Link to= "/darsolucion"><FontAwesomeIcon  icon={faSchool}></FontAwesomeIcon></Link>
                        <div>Servicios No Solucionados</div>
                    </div>
                </div>
                
                <div className="header-item">
                    <div className="user">
                        <Link to= "/borrar/misservicios"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Link>
                        <div>Borrar mis Servicios</div>
                    </div>
                    
                </div>
                <div className="header-item">
                    <div className="user">
                        <Link to= "/insert/servicios"><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></Link>
                        <div>Subir mi servicio a solucionar</div>
                    </div>
                
                </div>
    </div>
                <button onClick={logOut}>LOG OUT!</button>
                {
                    datos?.map((item,index)=>{
                        return(<>
                        
                <img key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu}/${item.nomFoto_usu}`} alt="imagen"/>
                        </>)
                    })
                }
                </nav>
        </>;

    return (<>{isUserLogged && salida}</>)
}

export default TitleUserAdmin;