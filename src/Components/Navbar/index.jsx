import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./index.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/dsolw4c9p/image/upload/c_thumb,w_200,g_face/v1739467264/TM_LOGO_enmfrd.png"
            alt="Tm Roldan srl"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/" className="text-white">
              Inicio
            </Nav.Link>
            <NavDropdown title="Horometros" id="navbarScrollingDropdown" bg='dark' className="custom-dropdown">
                <NavDropdown.Item href='/controlalquiler' className="text-white">Horom. Central</NavDropdown.Item>
                <NavDropdown.Item href="/controlfincas" className="text-white">Horom. Servicio Fincas</NavDropdown.Item>
                <NavDropdown.Item href="/controlterceros" className="text-white">Horom. Terceros</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Depósitos" id="navbarScrollingDropdown"  bg='dark' className="custom-dropdown">
                <NavDropdown.Item href='#' className="text-white">Depósito taller</NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-white">Camioneta AD166EI</NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-white">Camioneta AD250FH</NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-white">Camioneta AD250DU</NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-white">Camioneta HZP242</NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-white">Camioneta AF388VC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Torneria" id="navbarScrollingDropdown"  bg='dark' className="custom-dropdown">
                <NavDropdown.Item href='/tracto' className="text-white">Tractoelevador</NavDropdown.Item>
                <NavDropdown.Item href="/autoelevador-mitsubishi" className="text-white">Autoelev. Mitsubishi</NavDropdown.Item>
                <NavDropdown.Item href="/autoelevador-doosan" className="text-white">Autoelev. Doosan</NavDropdown.Item>
                <NavDropdown.Item href="/autoelevador-manitou" className="text-white">Autoelev. Manitou</NavDropdown.Item>
                <NavDropdown.Item href="/tractores" className="text-white">Tractores</NavDropdown.Item>
                <NavDropdown.Item href="/volcadoras" className="text-white">Volcadoras</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pendientes" id="navbarScrollingDropdown"  bg='dark'  className="custom-dropdown">
                <NavDropdown.Item href='/empresas' className="text-white">Empresas</NavDropdown.Item>
                <NavDropdown.Item href="/taller" className="text-white">Taller</NavDropdown.Item>
                <NavDropdown.Item href="/fincas" className="text-white">Fincas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/estadisticas" className="text-white">
              Campaña
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/siginin" className="text-white">
              Maquinarias
            </Nav.Link>
            <Nav.Link href="/siginin" className="text-white">
              Inicia Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
