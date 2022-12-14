import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

function Header(props) {
    return (
        <header>
            <Navbar bg="dark" variant={"dark"} expand="lg" collapseOnSelect>
                <Container to={'/'}>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>MyShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/cart'}>
                                <Nav.Link href="/cart"><i className={"fas fa-shopping-cart"}/>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/login'}>
                                <Nav.Link href="/login"><i className={"fas fa-user"}/>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;