import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import '../../css/TitleUserAdminVertical.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserEdit,faCommentDots,faTasks,faMedal,faSchool,faUpload,faTrashAlt,faHome,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import ComentariosMenuVertical from '../ComentariosMenuVertical';

function TitleUserAdminVertical(props){
    const { isUserLogged, logOut } = useAuth(false);
    
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
                    <div className="header-item">
                        <Link to = "/comentario">Comentarios</Link>
                        <ul>
                <div className="cadro">

                    <div className="header-item">
                       

                        <Link to="/comentario/?valor=1">Iniciar conversacion</Link>
                        
                    </div>
                
                   <div className="header-item">
                       

                    <Link to="/comentario/?valor=2">Conversaciones</Link>
                      
                    </div> 
                
                  <div className="header-item">
                     

                    <Link to="/comentario/?valor=3">Comentarios sin ver</Link>
                      
                    </div>  
                
               
                    <div className="header-item">
                        

                        <Link to="/comentario/?valor=4">Conversaciones sobre mis servicios</Link>
                        

                    </div>
                </div>
               
            </ul>    
                    </div>
                    <div className="header-item">

                    <Link to = "/datospersonales">Modificacion de datos personales</Link>
                    </div>
                    <div className="header-item">

                    <Link to= "/darpuntuacion">Mis servicios</Link>
                    </div>
                    <div className="header-item">

                        <Link to= "/solucionados">Servicios Solucionados</Link>
                    </div>
                    <div className="header-item">

                    <Link to= "/darsolucion">Servicios no solucionados</Link>
                    </div>
                    <div className="header-item">

                    <Link to="/borrar/misservicios">Borrar mis servicios</Link>
                    </div>
                    <div className="header-item">

                    <Link to="/insert/servicios">Insertar servicios</Link>
                    </div>
                    
                    <div className="salir">

                    <FontAwesomeIcon onClick={logOut} icon={faSignOutAlt}></FontAwesomeIcon>
                    </div>
                   
                </ul>
                
                
                
                

                
                
                </div>
        </>;

    return (<>{isUserLogged && salida}</>)
}

export default TitleUserAdminVertical;