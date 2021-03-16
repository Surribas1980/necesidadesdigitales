import { Link } from 'react-router-dom';
import '../css/App.css';
import useAuth from '../shared/hooks/useAuth';

function Title(){
    const { isUserLogged } = useAuth(false);
    const salida = <><nav>
             <div className="header-item">
                            <Link to="/">Home</Link>
              </div> 
              <div className="header-item">
                <Link to="/login">Login</Link>
              </div>
              <div className="header-item">
                <Link to="/register">Register</Link>
              </div>
    </nav></>;
    return(<>  {!isUserLogged && salida}
    
    </>)


}
export default Title;