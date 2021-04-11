import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';

import '../../css/TitleUserAdmin.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserEdit,faCommentDots,faTasks,faMedal,faSchool,faUpload,faTrashAlt,faHome,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


function TitleUserAdmin(props){
    const { isUserLogged, logOut } = useAuth(false);
    
    const datos = props?.datosusuario;
    
    console.log('la foto:',datos);

const salida =<>
<div className="navegacionuseradmin">
        <div className="encoller">

                <div className="header-item">
                    
                        <Link to = "/useradmin"><div className="user"><FontAwesomeIcon icon={faHome} /></div></Link>
                        <div>Inicio</div>
                    
                
                </div>
                <div className="header-item">
                    
                        <Link to = "/comentario"><div className="user"><FontAwesomeIcon icon={faCommentDots} /></div></Link>
                        <div>Comentarios</div>
                        
                        {/*<div className="externo">
                            <div className="interno">
                                <div className="externo">
                                    <div className="interno">
                                        <ComentariosMenuVertical />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    
                </div>               
                <div className="header-item">

                    
                        <Link to = "/datospersonales"><div className="user"><FontAwesomeIcon icon={faUserEdit} /></div></Link>
                        <div>Editar</div>
                    
                </div>
                <div className="header-item">
                    
                        <Link to= "/darpuntuacion"><div className="user"><FontAwesomeIcon icon={faTasks}/></div></Link>
                        <div>Mis servicios</div>
                    
                </div>
                <div className="header-item">
                    
                        <Link to="/ranking"><div className="user"><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></div></Link>
                        <div>Ranking</div>
                    
                </div>
                <div className="header-item">
                    
                        <Link to= "/solucionados"><div className="user"><FontAwesomeIcon icon={faSchool}></FontAwesomeIcon></div></Link>
                        <div>Servicios Solucionados</div>
                    
                </div>
                <div className="header-item">
                    
                        <Link to= "/darsolucion"><div className="user"><FontAwesomeIcon  icon={faSchool}></FontAwesomeIcon></div></Link>
                        <div>Servicios No Solucionados</div>
                    
                </div>               
                <div className="header-item">
                    
                        <Link to= "/borrar/misservicios"><div className="user"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></div></Link>
                        <div>Borrar mis Servicios</div>
                    
                    
                </div>
                <div className="header-item">
                    
                        <Link to= "/insert/servicios"><div className="user"><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></div></Link>
                        <div>Subir mi servicio a solucionar</div>
                    
                
                </div>
                
        </div>
                {/*<button onClick={logOut}>LOG OUT!</button>*/}
        <div className="navegacionuseradmin">
                {
                        datos?.map((item,index)=>{
                                return(<>
                        
                                <img key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu}/${item.nomFoto_usu}`} alt="imagen"/>
                        </>)
                    })
                }
                <Link to="/"><div className="salir"><FontAwesomeIcon onClick={logOut} icon={faSignOutAlt}></FontAwesomeIcon></div></Link>
        
        </div>       
</div>
        </>;

    return (<>{isUserLogged && salida}</>)
}

export default TitleUserAdmin;