import { useState} from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
function ComentariosMenuVertical(){
    const [showSiguiente, setShowSiguiente]=useState(false);
    const { isUserLogged } = useAuth(false);
    
    return (<> {isUserLogged &&
        <nav>
            <ul>
                
                    <div className="header-item">
                       

                        <Link onClick={()=>{setShowSiguiente(!showSiguiente)}} to="/iniciarconversacion">Iniciar conversacion</Link>
                        
                    </div>
                
                   <div className="header-item">
                       

                    <Link to="/insertarcomentario">Conversaciones</Link>
                      
                    </div> 
                
                  <div className="header-item">
                     

                    <Link to="/comentariosrecibidos">Comentarios sin ver</Link>
                      
                    </div>  
                
               
                    <div className="header-item">
                        

                        <Link to="/misconversaciones">Conversaciones sobre mis servicios</Link>
                        

                    </div>
               
            </ul>    
        </nav>}
    </>);
}

export default ComentariosMenuVertical;