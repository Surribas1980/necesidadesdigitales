import {Link} from 'react-router-dom';
import '../../css/TitleMisServicios.css';
function TitleMisServicios(){
    return(<><div className="redondeo">
    <div className="mismenuslaterais">
        <div className="misservicios">
        <Link  to = "/missolucionados">Mis servicios solucionados</Link>
         </div>
 
        <div className="misservicios">
        <Link to ="/misservisnosol">Elección de las soluciones</Link>
        </div>
    </div>
 </div></>);
}
export default TitleMisServicios;