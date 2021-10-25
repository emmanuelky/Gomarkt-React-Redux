import React, { useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Badge } from 'react-bootstrap'
import SearchBar from './SearchBar'
import logo from '../Data/images/GO-Markt-LOGO.png'
import { FaOpencart } from 'react-icons/fa'
import { RiMapPinUserLine } from 'react-icons/ri'
import { fetchAllProducts } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'



const MyNavBar = () => {

    const cartItems = useSelector(state => state.products.cart)
    const dispatch = useDispatch()

    console.log(cartItems)


    return (
        <div className="mb-2">
            <Navbar collapseOnSelect expand="lg" className='my-5' className="bg-yellow-800 fixed-top " variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img className='w-50 h-50' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Shop</Nav.Link>
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/products">Men</NavDropdown.Item>
                                <NavDropdown.Item href="/products">Women</NavDropdown.Item>
                                <NavDropdown.Item href="/products">Jewelery</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/products">Electronics</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <SearchBar />

                            </Nav.Link>

                        </Nav>
                        <Nav className="mx-5">
                            <Nav.Link href="/" className="mx-4 align-self-center text-2xl"> < RiMapPinUserLine /></Nav.Link>
                            <Nav.Link eventKey={2} href="/cart">
                                <div className='flex'>
                                    <div className='text-4xl mx-1 text-yellow-300'>
                                        < FaOpencart />

                                    </div>
                                    <span>

                                        <Badge pill bg="warning" text="dark">
                                            {cartItems?.length}
                                        </Badge>{' '}

                                    </span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar
