import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import SearchBar from './SearchBar'
import logo from '../Data/images/GO-Markt-LOGO.png'

const MyNavBar = () => {
    return (
        <div className="mb-5">
            <Navbar collapseOnSelect expand="lg" className='my-5' className="bg-yellow-800 fixed-top" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img className='w-50 h-50' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/men">Men</NavDropdown.Item>
                                <NavDropdown.Item href="/women">Women</NavDropdown.Item>
                                <NavDropdown.Item href="/children">Jewelery</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><SearchBar /></Nav.Link>

                        </Nav>
                        <Nav className="mx-5">
                            <Nav.Link href="/profile">User</Nav.Link>
                            <Nav.Link eventKey={2} href="/cart">
                                Cart (0)
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar
