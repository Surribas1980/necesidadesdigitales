import { Redirect } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

export default function PublicRoute({ children }) {
  const { isUserLogged } = useAuth();
  console.log('Paso por Public Route y isUserlogge es',isUserLogged)
  return <>{!isUserLogged ? children : <Redirect to="/login"></Redirect>}</>;
}