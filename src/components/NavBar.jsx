import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    const [cartCount, setCartCount] = useState(0);

    const handleUpdateCart = (count) => {
        setCartCount(count);
    };

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
                <Nav.Link as={Link} to="/">
                Cursos
                </Nav.Link>
                <Nav.Link as={Link} to="#">¿Quiénes somos?</Nav.Link>
                <Nav.Link as={Link} to="#">Registrate</Nav.Link>
            </Nav>
            <CartWidget count={cartCount} />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;