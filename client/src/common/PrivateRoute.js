import { Navigate } from 'react-router-dom'
import useAuth from './useAuth'

function PrivateRoute({ element, path }) {
  const { authed } = useAuth();
  const ele = authed === true
    ? element
    : <Navigate to="/login" replace />;

  return <Route path={path} element={ele} />;
}

export default PrivateRoute;