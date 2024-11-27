import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuthContext();

  return isAuth ? children : <Navigate to="/" />;
}
