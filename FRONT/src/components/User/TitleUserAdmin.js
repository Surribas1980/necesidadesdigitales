import { Link } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';



function TitleUserAdmin(){
    const { isUserLogged, logOut } = useAuth(false);

const salida =<><nav>
<div className="header-item">

<Link to="/useradmin">Recoger</Link>
</div>
<div className="header-item">

<Link to="/servicio">Solicitar servicio</Link>
</div>
<div className="header-item">

<Link to = "/comentario">Comentarios</Link>
</div>
<div className="header-item">

<Link to = "/datospersonales">Modificacion de datos personales</Link>
</div>
<div className="header-item">

<Link to= "/darsolucion">Dar posible solucion</Link>
</div>
<div className="header-item">

<Link to= "/darpuntuacion">Mis servicios</Link>
</div>
<div className="header-item">

<Link to= "/solucionados">Servicios Solucionados</Link>
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
</nav></>;

    return (<>{isUserLogged && salida}</>)
}

export default TitleUserAdmin;