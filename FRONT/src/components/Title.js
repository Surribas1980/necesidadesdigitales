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
  <img className="loguito" src={ellogo} alt="imagen"></img>
      <input
        class="boton1"
        type="button"
        onClick={() => {
          CambiarEstilo("tipo4", "tipo3", "capa-variable2");
        }}
        value="☰"
      />
          <div id="capa-variable2" class="tipo4">
                {/*esto es una capa3
                <div>es otra cosa</div>
                <Link to="otro">enlazar</Link>
                <div>
                <Link to="otro">enlazar2</Link>
                </div>*/}
                <div className="tipo41">
                  <NuevoLink
                            
                            activeClass="active"
                            to="contacta"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            >Directivos
                  </NuevoLink>

                </div>
                <div  className="tipo41">
                                <NuevoLink 
                                  
                                  activeClass="active"
                                  to="conocenos"
                                  spy={true}
                                  smooth={true}
                                  offset={-50}
                                  duration={500}
                                >Conónocenos</NuevoLink>
                </div>
                <div  className="tipo41">
                        <NuevoLink
                          
                          activeClass="active"
                          to="otros"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={500}
                      >Otros</NuevoLink>
                </div>
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
          </div>
      
      </div>
      </>;
   
   
    console.log('valor titulo:',window.screen.availHeight,window.screen.availWidth);
   
   
   return(<>  
    
   {!isUserLogged && <div>{salida1}{salida2}
   {/*<input
        class="boton1"
        type="button"
        onClick={() => {
          CambiarEstilo("tipo4", "tipo3", "capa-variable2");
        }}
        value="Cambiar"
      />
   <div id="capa-variable2" class="tipo4">
        esto es una capa3
        <div>es otra cosa</div>
        <Link to="otro">enlazar</Link>
        <div>
        <Link to="otro">enlazar2</Link>
        </div>
        <NuevoLink
                  
                  activeClass="active"
                  to="contacta"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  >Directivos</NuevoLink>
   </div>*/}
   
   </div>}
    </>)


}
export default Title;