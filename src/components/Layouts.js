import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Layouts = () => {
  return <div>
    <Navbar bg="dark" expand="lg">
                <Container >
                    <Navbar.Brand ><Link to='/' className=''>ForSab</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto" text-aling="center"  >
                            <Nav.Link variant="secondary"><Link to='/'>Inicio</Link></Nav.Link>
                            <Nav.Link><Link to='/nosotros'>Nosotros</Link></Nav.Link>
                            <Nav.Link><Link to='/contacto'>Contacto</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
  </div>;
};

export default Layouts;
