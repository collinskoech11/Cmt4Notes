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
                <Nav.Link href="/Upcoming">Upcoming Assignments</Nav.Link>
                <Nav.Link href="/">Exam Prediction</Nav.Link>
                <Nav.Link href="/ComputerScience">Courses</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    
                    <NavDropdown.Item href="/System">Request push access</NavDropdown.Item>
                    <NavDropdown.Item href="/System">Report a problem </NavDropdown.Item>
                   
                    <NavDropdown.Item href="/System">Suggestions </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://github.com/collinskoech11/Cmt4Notes">Collaborators</Nav.Link>
                </Nav>

               
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}

export default Navpage
