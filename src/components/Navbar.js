import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HeaderNavbar({ headerRef }) {
  return (
    <div id="HeaderNavbar">
      <Navbar expand="lg">
        <Container>
          <div class="justify-content-start d-flex">
            <Navbar.Brand>Symmirror</Navbar.Brand>
          </div>
          <div class="justify-content-end d-flex">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="company">Company</Nav.Link>
                <Nav.Link href="link">personal test</Nav.Link>
                <NavDropdown title="personality types" id="basic-nav-dropdown">
                  <NavDropdown.Item href="prid" activeClassName='active'>Prid</NavDropdown.Item>
                  <NavDropdown.Item href="action/3.2">Envy</NavDropdown.Item>
                  <NavDropdown.Item href="action/3.3">Wrath</NavDropdown.Item>
                  <NavDropdown.Item href="action/3.4">Sloth</NavDropdown.Item>
                  <NavDropdown.Item href="action/3.5">Greed</NavDropdown.Item>
                  <NavDropdown.Item href="action/3.6">Gluttony</NavDropdown.Item>
                  <NavDropdown.Item href="action/3.7">Lust</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      </div>
  );
}
