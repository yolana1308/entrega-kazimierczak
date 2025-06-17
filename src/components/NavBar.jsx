import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">
            Los Chefcitos 🐭
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                Home
                </Nav.Link>
                <Nav.Link as={Link} to="/">Cursos</Nav.Link>
                <Nav.Link as={Link} to="#">¿Quiénes somos?</Nav.Link>
                <Nav.Link as={Link} to="#">Registrate</Nav.Link>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

export default NavBar;