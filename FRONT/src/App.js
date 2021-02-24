import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import InsertServices from './Pages/InsertServices';
import AdminComponent from './components/AdminComponent';
import UserComponent from './components/UserComponent';
import { AuthProvider } from './shared/context/authContext';
import DeleteService from './Pages/DeleteService';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AdminRoute from './components/AdminRoute';
import UserAdmin from './Pages/UserAdmin';
import PrivateComponent from './components/PrivateComponent';
import Graficas from './Pages/Graficas';


function App() {
  return (    
    
        <Router>
          <AuthProvider>
          <div>
            <ul>
              <li>
                <Link to="/graficas">Graficas</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <PrivateComponent>
                  <li>
                    <Link to="/delete/servicios">Borrar servicios</Link>
                  </li>
                  <UserComponent>
                    <li>
                      <Link to="/insert/servicios">Insertar servicios</Link>
                    </li>
                    <li>
                      
                        <Link to="/useradmin">UserAdmin</Link>
                      
                    </li>
                  </UserComponent>
                  <li>
                    <AdminComponent>
                      <Link to="/admin">Administrador</Link>
                    </AdminComponent>
                  </li>
              </PrivateComponent>
            </ul>
    
            <Switch>
              
                <Route exact path="/">
                  <Home />
                </Route> 
                <Route path="/graficas">
                  <Graficas />
                </Route>                        
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">  
                  <PublicRoute>
                    <Login />                                
                  </PublicRoute>       
                </Route>
                <Route path="/insert/servicios">
                    <InsertServices />
                </Route>
                <Route path="/useradmin">
                  <PrivateRoute>
                    <UserAdmin />
                  </PrivateRoute>
                 
                </Route>
                <Route path="/admin">
                  <AdminRoute>
                    <Admin></Admin>
                  </AdminRoute>

                </Route>
                <Route path="/delete/servicios">
                 
                    <DeleteService />
                  
                </Route>                
              
            </Switch>
          </div>
          </AuthProvider>
        </Router>
      
    
    
  );
}

export default App;
