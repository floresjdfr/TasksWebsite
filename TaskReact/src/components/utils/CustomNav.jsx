import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthenticationButton from "../authentication/AuthenticationButton";

function CustomNav() {
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
            <AuthenticationButton />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
