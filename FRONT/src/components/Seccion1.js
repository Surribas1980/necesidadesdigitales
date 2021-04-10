import '../css/Seccion1.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshake,faUniversity,faComment,faHeadSideVirus} from '@fortawesome/free-solid-svg-icons';
function Seccion1() {

    return(<>
    
    <div className="colorseccion1">
        <section className="seccion1">
            <div className="icono"><FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon></div>
            <div>

            Entra en una plataforma donde compartirás conocimiento
            </div>
        </section>
        <div className="seccion2">
            <div className="icono"><FontAwesomeIcon icon={faHeadSideVirus}></FontAwesomeIcon><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></div>
        <div>

        Podrás interactuar con otras personas
        </div>
        </div>
        <div className="seccion3">
            <div className="icono"><FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon></div>
        
        <div>
        Deja que otros te ayuden con sus habilidades
        </div>
        </div>
    </div>
    </>);


}
export default Seccion1;
