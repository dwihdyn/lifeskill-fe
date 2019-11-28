import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = props => {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
          <a href="#" class="navbar-brand text-uppercase font-weight-bold">
            LifeSkills
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right"
          >
            <i class="fa fa-bars"></i>
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  Log In
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  School Calendar
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  My Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  Give Points
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  LifeSkills
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-uppercase font-weight-bold">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <Navbar bg="light" variant="light" className="fixed-top">
        <Navbar.Brand href="#home">LifeSkills</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Log In</Nav.Link>
          <Nav.Link href="#features">Sign Up</Nav.Link>
          <Nav.Link href="#pricing">School Calendar</Nav.Link>
          <Nav.Link href="#pricing">Upload</Nav.Link>
          <Nav.Link href="#home">My Dashboard</Nav.Link>
          <Nav.Link href="#features">Give Points</Nav.Link>
          <Nav.Link href="#pricing">Sign Out</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
