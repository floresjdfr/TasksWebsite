import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { GlobalContext } from "../contexts/GlobalContext";

import { useAuth0 } from "@auth0/auth0-react";

function ProfileInformation() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  return (
    <>
      <Container className="mt-3">
        <h2>Still under implementation...</h2>
      </Container>
    </>
  );
}

export default ProfileInformation;
