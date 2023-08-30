import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="links">Link 1</Nav.Link>
              <Nav.Link href="#pricing" className="links">Link 2</Nav.Link>
              <Nav.Link href="#pricing" className="links">Link 3</Nav.Link>
              <Nav.Link href="#pricing" className="links">Link 4</Nav.Link>
            </Nav>
            <Nav>        
              <Nav.Link eventKey={2} href="#memes" className="cartIcon">
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
