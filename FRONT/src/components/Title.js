import { Link } from 'react-router-dom';
import {Link as NuevoLink} from 'react-scroll';
import '../css/Title.css';
import useAuth from '../shared/hooks/useAuth';
import ellogo from '../shared/img/logo.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
function Title(){
    const { isUserLogged} = useAuth(false);
    let salida;
    let anchura = window.screen.availWidth;
    
    if( anchura > 700){
      salida= <>
      <div className="total">
  
          <img className="loguito" src={ellogo} alt="imagen"></img>
          <div className="empieza">
            
                <div className="conespacio">
                          <NuevoLink
                          data-cono="cono"
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
                  data-dire="direc"
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
                  data-otro="otros"
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
     
    }
    else{
      salida = <>
      <div className="total"><img className="loguito" src={ellogo} alt="imagen"></img>
      <div className="bb"> <FontAwesomeIcon className="barras" icon={faBars}></FontAwesomeIcon> </div>
      
      </div>
      </>;
    }
   
    console.log('valor titulo:',window.screen.availHeight,window.screen.availWidth);
   
   
   return(<>  {!isUserLogged && salida}
    
    </>)


}
export default Title;