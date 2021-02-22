import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Formulario from './Pages/Formulario';
import Login from './Pages/Login';
import Register from './Pages/Register';
import InsertServices from './Pages/InsertServices';
import AuthForm from './components/AuthForm';
import { AuthProvider } from './shared/context/authContext';
import DeleteService from './Pages/DeleteService';

function App() {
  return (    
    
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/insert/servicios">Insertar servicios</Link>
              </li>
              <li>
                <Link to="/delete/servicios">Borrar servicios</Link>
              </li>
              <li>
                <Link to="/formulario/prueba">Forumulario</Link>
              </li>
            </ul>
    
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>                         
              <Route path="/register">
                <Register />
              </Route>
              <AuthProvider>
                <Route path="/login">                    
                    <Login />                                
                </Route>
                <Route path="/insert/servicios">
                  <InsertServices />
                </Route>
                <Route path="/delete/servicios">
                  <DeleteService></DeleteService>
                </Route>
                <Route path="/formulario/prueba">
                  <Formulario></Formulario>
                </Route>
              </AuthProvider>
            </Switch>
          </div>
        </Router>
      
    
    
  );
}

export default App;
