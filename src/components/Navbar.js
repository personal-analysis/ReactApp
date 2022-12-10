import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HeaderNavbar({ headerRef }) {
  return (
    <div class="top_box_shadow">
      <div id="HeaderNavbar" class="top_box_shadow header_content d-flex align-items-center">
        <Navbar expand="lg">
          <Container>
            <div class="d-flex justify-content-start">
              <Navbar.Brand>Symmirror</Navbar.Brand>
            </div>
            <div class="justify-content-end d-flex">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">home</Nav.Link>
                  <Nav.Link href="company">Company</Nav.Link>
                  <Nav.Link href="personaltest">personal test</Nav.Link>
                  <Nav.Link href="firebasetest">firebase test</Nav.Link>
                  <NavDropdown title="personality types" id="basic-nav-dropdown">
                    <NavDropdown.Item href="prid">Prid</NavDropdown.Item>
                    <NavDropdown.Item href="envy">Envy</NavDropdown.Item>
                    <NavDropdown.Item href="wrath">Wrath</NavDropdown.Item>
                    <NavDropdown.Item href="sloth">Sloth</NavDropdown.Item>
                    <NavDropdown.Item href="greed">Greed</NavDropdown.Item>
                    <NavDropdown.Item href="gluttony">Gluttony</NavDropdown.Item>
                    <NavDropdown.Item href="lust">Lust</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
