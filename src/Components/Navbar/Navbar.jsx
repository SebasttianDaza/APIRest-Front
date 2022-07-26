import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ErrorBoundary } from "react-error-boundary";
import { FaPizzaSlice } from "react-icons/fa";
import { Register } from "@Components/Forms/";
import { ModalComponent } from "@Components/Modals";

import { ErrorFallback } from "@/Errors";

const NavBar = ({}) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar
          variant="light"
          className="h-100 flex-column align-items-stretch text-warning"
          expand="md"
          id="navbar"
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-pills flex-column">
                <Navbar.Brand href="#home" className="text-warning text-left mb-3">
                  <FaPizzaSlice />
                  SR
                </Navbar.Brand>
                <ModalComponent info={{ variant: "success", text: "Register" }}>
                  <Register />
                </ModalComponent>
                <Nav.Link className="text-dark mt-2" href="#header">
                  Basic
                </Nav.Link>
                <Nav.Link className="text-dark mt-2" href="#request">
                  Example
                </Nav.Link>
                <Nav.Link className="text-dark" href="#authentication">
                  Authentication
                </Nav.Link>
                <Nav.Link className="text-dark" href="#get">
                  Resources List
                </Nav.Link>
                <Nav.Link className="text-dark" href="#getunit">
                  Get resource
                </Nav.Link>
                <Nav.Link className="text-dark" href="#post">
                  Create resource
                </Nav.Link>
                <Nav.Link className="text-dark" href="#put">
                  Update resource
                </Nav.Link>
                <Nav.Link className="text-dark" href="#delete">
                  Delete resource
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </ErrorBoundary>
    </>
  );
};

export default NavBar;
