import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

type ProviderProps = {
  children: any;
};

function PrivateRoute({ children }: ProviderProps) {
  const { session } = UserAuth();

  if (session === undefined) {
    return <div className="loader"></div>;
  }

  return <>{session ? <>{children}</> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
