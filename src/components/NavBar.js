import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
function NavBarBS() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img alt='logotipo' src={require('../assets/img/logotipo-s.png')} /><img alt='isotipo' src={require('../assets/img/isotipo-s.png')} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav ">
                    <Nav className="align-items-center px-5">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Café en granos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Accesorios
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Vajilla</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Cart"><CartWidget></CartWidget>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarBS;