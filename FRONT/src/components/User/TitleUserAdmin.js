import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import TitleUserAdminVertical from './TitleUserAdminVertical';
import '../../css/TitleUserAdmin.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserEdit,faCommentDots} from '@fortawesome/free-solid-svg-icons';
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
                                        <ComentariosMenuVertical></ComentariosMenuVertical>
                                        
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

                <Link to= "/darpuntuacion">Mis servicios</Link>
                </div>
                <div className="header-item">

                <Link to= "/solucionados">Solucionados</Link>
                </div>
                <div className="header-item">

                <Link to= "/darsolucion">No solucionados</Link>
                </div>
                
                <div className="header-item">
                    <Link to="/borrar/misservicios">Borrar</Link>
                </div>
                <div className="header-item">
                <Link to="/insert/servicios">Insertar</Link>
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