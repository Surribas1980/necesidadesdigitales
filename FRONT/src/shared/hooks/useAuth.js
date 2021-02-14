import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

// 1 Vamos a crear un custom hook
// Este hook es lo que voy a usar para acceder al contexto custom que voy a crear
export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
