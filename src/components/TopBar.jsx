import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          React-Axios Task
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact>
              <span style={{ fontSize: '1.2rem' }}>Home</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard">
              <span style={{ fontSize: '1.2rem' }}>Dashboard</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/create">
              <span style={{ fontSize: '1.2rem' }}>Create</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
