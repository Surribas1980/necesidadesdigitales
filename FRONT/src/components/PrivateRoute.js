import { Redirect } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

export default function PrivateRoute({ children }) {
  const { isUserLogged } = useAuth(false);
  console.log('Paso por Private Route y isUserlogge es',isUserLogged)
  return <>{isUserLogged ? children : <Redirect to="/login"></Redirect>}</>;
}
