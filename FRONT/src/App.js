import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import InsertServices from './Pages/InsertServices';

import { AuthProvider } from './shared/context/authContext';
import DeleteService from './Pages/DeleteService';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import UserAdmin from './Pages/UserAdmin';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (    
    
        <Router>
          <AuthProvider>
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
              <PrivateComponent>
                  <li>
                    <Link to="/insert/servicios">Insertar servicios</Link>
                  </li>
                  <li>
                    <Link to="/delete/servicios">Borrar servicios</Link>
                  </li>
                  <li>
                    <Link to="/useradmin">UserAdmin</Link>
                  </li>
              </PrivateComponent>
            </ul>
    
            <Switch>
              
                <Route exact path="/">
                  <Home />
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
