import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/utils/Loading";

const ProtectedRoute = ({ component, ...props }) => {
  const Component = withAuthenticationRequired(component, {
    ...props,
    onRedirecting: () => <Loading />,
  });

  return <Component />;
};

export default ProtectedRoute;
