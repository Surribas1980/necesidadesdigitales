import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthForm from './components/AuthForm';
import { AuthProvider } from './shared/context/authContext';

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
             
            </ul>
    
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">  
                <AuthProvider>
                  <Login />
                </AuthProvider>                
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              
            </Switch>
          </div>
        </Router>
      
    
    
  );
}

export default App;
