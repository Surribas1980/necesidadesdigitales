import { useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
function ComentariosMenuVertical(props){
    const [showSiguiente, setShowSiguiente]=useState(false);
    const { isUserLogged } = useAuth(false);
    
    return (<> {isUserLogged &&
        <nav>
            <ul>
                
                    <div className="header-item">
                       

                        <Link to="/comentario/?valor=1">Iniciar conversacion</Link>
                        
                    </div>
                
                   <div className="header-item">
                       

                    <Link to="/comentario/?valor=2">Conversaciones</Link>
                      
                    </div> 
                
                  <div className="header-item">
                     

                    <Link to="/comentario/?valor=3">Comentarios sin ver</Link>
                      
                    </div>  
                
               
                    <div className="header-item">
                        

                        <Link to="/comentario/?valor=4">Conversaciones sobre mis servicios</Link>
                        

                    </div>
               
            </ul>    
        </nav>}
    </>);
}

export default ComentariosMenuVertical;