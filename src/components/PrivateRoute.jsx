import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return isLoggenIn ? component : <Navigate to={redirectTo} />;
}
