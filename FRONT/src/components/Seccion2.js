import '../css/Seccion2.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPoll,faHandshake} from '@fortawesome/free-solid-svg-icons';
import dos from '../shared/img/2.jpg';
function Seccion2() {
let imagen = dos;
    return(<>
    <div></div>
    <div className="colorseccion2">
        
        <section className="primero">
            {/*<img className="imagen0" src={imagen} alt="imagen"/>*/}
           
        </section>
        <section className="seccion2">
                <div className="icono">
                    <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                </div>
                <div className="bordeado">
                    <div className="algun">
                        Un titulo
                    </div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                </div>
        </section>
    </div>
    </>);


}
export default Seccion2;
