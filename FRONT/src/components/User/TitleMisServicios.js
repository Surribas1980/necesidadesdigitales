import {Link} from 'react-router-dom';
import '../../css/TitleMisServicios.css';
function TitleMisServicios(){
    return(<>
    
    <div className="cajaprincipal">
        
            <div className="cajita1">
                <Link  to = "/missolucionados">Mis servicios solucionados</Link>
            </div>
 
            <div className="cajita2">
                <Link to ="/misservisnosol">Elección de las soluciones</Link>
            </div>
        
    </div>
 </>);
}
export default TitleMisServicios;