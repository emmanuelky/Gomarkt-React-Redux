import React from 'react'
import { Navbar, Container, Col, Row, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import SearchBar from './SearchBar'
import logo from '../Data/logo/GO-Markt-LOGO.png'

const MyNavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-yellow-800" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img className='w-50 h-50 my-0 py-0' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>

                        <NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Children</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Accessory</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><SearchBar /></Nav.Link>

                    </Nav>
                    <Nav className="mx-5">
                        <Nav.Link href="#deets">User</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Cart (0)
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavBar
