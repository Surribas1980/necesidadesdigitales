import '../css/Seccion2.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPoll,faHandshake} from '@fortawesome/free-solid-svg-icons';
import dos from '../shared/img/2.jpg';
function Seccion2() {

    return(<>
    <div></div>
    <div className="colorseccion2">
        
        <section className="seccion2">
        <img className="imagen0" src={dos} alt="imagen"/>
            {/*<img className="imagen" src={`http://localhost:4000/imagenes/imagenes/${valor}640.png`} alt="imagen"/>*/}
          
                {/*<h2>Sed ut perspiciatis</h2>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
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
                </div>*/}
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
