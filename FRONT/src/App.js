import './css/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
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
import useAuth from "./shared/hooks/useAuth";
import Title from './components/Title';

function App() {
  const [showMenu, setShowMenu]=useState(false);
  //const { isUserLogged } = useAuth(false);
  return (    
    
        <Router>
          <AuthProvider>
            <Title></Title>
            <nav>
  
              

              <PrivateComponent>
                  
                    <UserComponent>
                    
                    
                  </UserComponent>
                    <AdminComponent>
                      <div className="header-item">
                        <Link to="/admin">Administrador</Link>
                      </div>
                    </AdminComponent>
              </PrivateComponent>

            </nav>
           
    
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
                               
              
            </Switch>
          
          </AuthProvider>
        </Router>
      
    
    
  );
}

export default App;
