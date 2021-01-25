import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';

function Navpage() {
    return (
    <>
        <Navbar bg="blue" expand="lg">
            <Navbar.Brand href="/">Live Summary</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/System">Courses</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Request push access</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Report a problem </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Suggestions </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Collaborators</Nav.Link>
                </Nav>

               
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}

export default Navpage
