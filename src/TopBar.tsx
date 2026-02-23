import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <h1>Pit's Art Games</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link className="nav-link" to="/oddcolor"></Link>
          </Nav>
          <Nav.Link href="/oddcolor"> Odd Color </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
