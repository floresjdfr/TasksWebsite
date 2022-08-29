import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useAuth0 } from "@auth0/auth0-react";

function CustomNav() {
  

  const { loginWithRedirect } = useAuth0();

  const handleOnLogin = () => {
    loginWithRedirect();
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Tasks App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Tasks</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="primary" onClick={handleOnLogin}>
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
