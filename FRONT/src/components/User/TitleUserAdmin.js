import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import '../../css/TitleUserAdmin.css'


function TitleUserAdmin(props){
    const { isUserLogged, logOut } = useAuth(false);
    
    const datos = props?.datosusuario;
    console.log('la foto:',datos);

const salida =<><nav>
                <div className="header-item">
                
                <Link to="/useradmin">Recoger</Link>
                </div>

                <div className="header-item">

                <Link to = "/comentario" >Comentarios</Link>
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
                    <Link to="/delete/servicios">Borrar servicios</Link>
                </div>
                <div className="header-item">
                    <Link to="/borrar/misservicios">Borrar mis servicios</Link>
                </div>
                <div className="header-item">
                <Link to="/insert/servicios">Insertar servicios</Link>
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