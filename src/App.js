import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import lancheirinha from './assents/lancherinha.png'; 

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Lancheirinha da Nutri</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Produtos" id="basic-nav-dropdown">
                <NavDropdown.Item href="Garrafas">Garrafas Térmicas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Vasilhas, copos e canudos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Conjunto de Talheres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Brinquedos de cozinha infantil
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FluidExample /> {}
      </>
  );
}

function FluidExample() {
  return <Image src={lancheirinha} fluid />; 
}

export default App; 
