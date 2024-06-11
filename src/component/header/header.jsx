import React from 'react';
import { Container, Navbar, Button , Nav } from 'react-bootstrap';
import logo from '/src/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link , NavLink} from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
        <Nav.Link as={NavLink} to="/search" className="d-flex align-items-center">
        <FontAwesomeIcon icon={faSearch} size="2x" className="me-3" style={{ alignSelf: 'center' }} />
        </Nav.Link>
        <Button variant="success" className="me-3">Employer Login</Button>
        <Button variant="success">Candidate Login</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
