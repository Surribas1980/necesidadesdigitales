import { Link } from 'react-router-dom';
import '../css/Title.css';
import useAuth from '../shared/hooks/useAuth';

function Title(){
    const { isUserLogged} = useAuth(false);
    const salida = <>
    
      <div className="navegaciontitulo4">
              <div className="lateral">
                              <Link to="/">Home</Link>
                </div> 
                <div className="lateral">
                  <Link to="/login">Login</Link>
                </div>
                <div className="lateral">
                  <Link to="/register">Register</Link>
                </div>
                
      </div>
    
    </>;
    return(<>  {!isUserLogged && salida}
    
    </>)


}
export default Title;