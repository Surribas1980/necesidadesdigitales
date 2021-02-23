import useAuth from '../shared/hooks/useAuth';

export default function PrivateComponent({ children }) {
  const { isUserLogged } = useAuth();
console.log('Estoy en privateComponent ', isUserLogged);
  return <>{isUserLogged ? children : null}</>;
}