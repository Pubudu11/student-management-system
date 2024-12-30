import {Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-light-subtle shadow-sm mb-3 ">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/AddStudent" as={NavLink}>
            Add Student
          </Nav.Link>
          <Nav.Link to="/EditStudent" as={NavLink}>
            Edit Student
          </Nav.Link>
        </Nav>
    
      </Container>
    </NavbarBs>
  )
}