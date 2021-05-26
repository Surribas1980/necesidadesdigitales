import { Link } from 'react-router-dom';
import {Link as NuevoLink} from 'react-scroll';
import '../css/Title.css';
import useAuth from '../shared/hooks/useAuth';
import ellogo from '../shared/img/logo.png';
import {useState,useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
function Title(){
    const { isUserLogged} = useAuth(false);
    const [che,setCheck] = useState(false);
    let salida1;
    let salida2;
    
    const CambiarEstilo= (tipo,cambioportipo,id)=>{
      var elemento = document.getElementById(id);
      if (elemento.className === tipo) {
        elemento.className = cambioportipo;
      }else {
        elemento.className = tipo;
      }
  }
    
    
    salida1= <>
    <div className="tituloMaximo">
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
    </div>

      
      </>;

salida2 = <><div className="tituloMinimo">
      <div className="total">
        
      {/*<div className="dd">
        <div className="dd-btn">hover</div>
        <div className="dd-content">
          <a href="#">hhh</a>
          <a href="#">ññññ</a>
          <a href="#">kkk</a>
        </div>
    </div>*/}
          <img className="loguito" src={ellogo} alt="imagen"></img>
          <div className="bb">
            <FontAwesomeIcon onClick={()=>{CambiarEstilo("menu","menu-check","cambia")}} className="barras" icon={faBars}></FontAwesomeIcon> 
          </div>
          {<div id="cambia" className="menu">
            <ul>
              <li>
              <NuevoLink className="linkado"
                          
                          activeClass="active"
                          to="conocenos"
                          spy={true}
                          smooth={true}
                          offset={-50}
                          duration={500}
                        >Conónocenos</NuevoLink>
              </li>
              <li>
              <NuevoLink
                  
                  activeClass="active"
                  to="contacta"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  >Directivos</NuevoLink>
              </li>
              <li>
              <NuevoLink
                  
                      activeClass="active"
                      to="otros"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                  >Otros</NuevoLink>
              </li>
              
                      <div className="lateral">
                        <div>

                                    <Link  to="/">Home</Link>
                        </div>
                        <div>

                        <Link to="/login">Login</Link>
                        </div>
                        <div>

                        <Link  to="/register">Register</Link>
                        </div>
                      </div>

            </ul>
            </div>}
      </div>
      </div>
      </>;
   
   
    console.log('valor titulo:',window.screen.availHeight,window.screen.availWidth);
   
   
   return(<>  
    
   {!isUserLogged && <div>{salida1}{salida2}</div>}
    </>)


}
export default Title;