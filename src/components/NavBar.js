import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = props => {
  return (
    <>
      <Navbar bg="light" variant="light" className="fixed-top">
        <Navbar.Brand href="#home">LifeSkills</Navbar.Brand>
        <Nav className="mr-auto" >
          {props.isLogin ? (
            <>
              <Nav.Link href="/homepage">School Calendar</Nav.Link>
              <Nav.Link href="#">Upload</Nav.Link>
              <Nav.Link href="/profile">My Dashboard</Nav.Link>
              <Nav.Link href="#">Give Points</Nav.Link>
              <Nav.Link href="#">Sign Out</Nav.Link>
            </> 
          ) : (
            <>
              <Nav.Link href="/login">
                Log In
              </Nav.Link>
              <Nav.Link href="/login">Sign Up</Nav.Link>
            </>
          )}
          
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
