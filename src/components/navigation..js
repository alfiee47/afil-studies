import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import logo from '../images/Logo.png';




export default function Navigation(){
  return(<Navbar className="nav-color"  expand="lg">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="Association for International Language Studies" width="60"
          height="60"
          className="d-inline-block align-top"/></Navbar.Brand>
    <Navbar.Brand href="/">Association for International Language Studies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/education-service">Education Service</Nav.Link>
        <Nav.Link href="/Research">Research</Nav.Link>
        <Nav.Link href="/Career-service">Career Service</Nav.Link>
        <Nav.Link href="/About-us">About us</Nav.Link>
        <Nav.Link href="/contact-us">Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}




