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
        <h2>Profile information</h2>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control disabled={true} type="text" value={user.name } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control disabled={true} type="text" value={user.email } />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default ProfileInformation;
