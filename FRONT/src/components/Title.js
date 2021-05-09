import { Link } from 'react-router-dom';
import {Link as NuevoLink} from 'react-scroll';
import '../css/Title.css';
import useAuth from '../shared/hooks/useAuth';
import ellogo from '../shared/img/logo.png';
function Title(){
    const { isUserLogged} = useAuth(false);
    const salida = <>
    <div className="total">

        <img className="loguito" src={ellogo} alt="imagen"></img>
        <div className="empieza">
          
            <div className="conespacio">
            <NuevoLink
                        activeClass="active"
                        to="conocenos"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                      >Conónocenos</NuevoLink>
            </div>
          
              <div className="conespacio">

                <NuevoLink
                activeClass="active"
                to="contacta"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                >Directivos</NuevoLink>
              </div>

              <div className="conespacio">

                <NuevoLink
                    activeClass="active"
                    to="otros"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >Otros</NuevoLink>
              </div>

          

        </div>


      <div className="otrocontenedor">
        <div className="navegaciontitulo4">

                <div className="lateral">
                                <Link  to="/">Home</Link>
                  </div> 
                  <div className="lateral">
                    <Link  to="/login">Login</Link>
                  </div>
                  <div className="lateral">
                    <Link  to="/register">Register</Link>
                  </div>

                  
         
          
            
         
        </div>
      </div>
    </div>
    
    </>;
    return(<>  {!isUserLogged && salida}
    
    </>)


}
export default Title;