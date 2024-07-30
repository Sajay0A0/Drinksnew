import React from 'react';
import "../folderstyles/Navbar.css"
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Usenavbar() {
  return (
    <div className='sticky-top'>
      <Navbar expand="lg" className="bg-dark sticky-top flex px-4 py-4">
        <Container fluid>
          <Navbar.Brand className='text-white'>
            DEEP NET SOFT</Navbar.Brand>
          <Navbar.Toggle className='text-secondary' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-5 my-2 my-lg-0"
              style={{ maxHeight: '100px',padding:'10px 0 0 0' }}
              navbarScroll
            >
                <div style={{marginLeft:'52vw'}}></div>
                <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Space+Grotesk:wght@300..700&display=swap');
</style>
              <Nav><Link className='me-4 text' to='/1' >HOME</Link></Nav>
              <Nav><Link className='me-4 text' to='/menu'>MENU</Link></Nav>
              <Nav><Link className='me-4 text' to='/1'>MAKE A RESERVATION</Link></Nav>
              <Nav><Link className='me-4 text' to='/1'>CONTACT US</Link></Nav>


              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
