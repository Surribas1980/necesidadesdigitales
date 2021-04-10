import '../css/Seccion2.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPoll} from '@fortawesome/free-solid-svg-icons';
function Seccion2() {

    return(<>
    <div></div>
    <div className="colorseccion2">
        
        <section className="seccion2">
                <div className="titulo"><b><u>Sobre nosotros</u></b></div>
                Llevamos años trabajando con personas, las cuales están muy contentas con estas plataformas
        </section>
        <section className="seccion2">
                Con esta plataforma podrás, leer los trabajos que han seleccionado como <i>correctos</i> con lo que podrás aprender más. Al mismo tiempo
                podrás puntuarlo, viendo como se sitúan en un ranking
                <div className="icono"><FontAwesomeIcon icon={faPoll}></FontAwesomeIcon></div>
        </section>
    </div>
    </>);


}
export default Seccion2;
