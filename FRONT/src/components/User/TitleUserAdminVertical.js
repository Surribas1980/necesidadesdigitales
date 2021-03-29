import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import '../../css/TitleUserAdminVertical.css'


function TitleUserAdminVertical(props){
    const { isUserLogged, logOut } = useAuth(false);
    
    const datos = props?.datosusuario;
    console.log('la foto:',datos);

const salida =<><nav>

                <ul>
                {
                            datos?.map((item,index)=>{
                                return(<>
                                
                        <img className="imagen" key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu}/${item.nomFoto_usu}`} alt="imagen"/>
                                </>)
                            })
                        }
                    <div className="header-item">
                        <Link to="/useradmin">Recoger</Link>
                    </div>
                    <div className="header-item">
                        <Link to = "/comentario">Comentarios</Link>
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
                    <div className="header-item">

                    <button onClick={logOut}>LOG OUT!</button>
                        
                    
                    </div>
                   
                </ul>
                
                
                
                

                
                
                </nav>
        </>;

    return (<>{isUserLogged && salida}</>)
}

export default TitleUserAdminVertical;