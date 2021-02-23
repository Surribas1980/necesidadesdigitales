import { Redirect } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

export default function AdminRoute({ children }) {
  const { userData } = useAuth();
  return <>{userData.role ? children : <Redirect to="/"></Redirect>}</>;
}
