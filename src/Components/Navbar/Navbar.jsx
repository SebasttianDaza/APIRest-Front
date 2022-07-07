import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ErrorBoundary } from "react-error-boundary";
import { FaPizzaSlice } from "react-icons/fa";

import ErrorFallback from "../../Errors/handleErrors";
import ModalComponent from "../Modals/Modal";
import Register from "../Forms/Register";

const NavBar = ({}) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar
          variant="light"
          className="flex-column align-items-stretch text-warning"
          expand="md"
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-pills flex-column">
                <Navbar.Brand href="#home" className="text-warning text-left">
                  <FaPizzaSlice />
                  SR
                </Navbar.Brand>
                <ModalComponent info={{ variant: "success", text: "Register" }}>
                  <Register />
                </ModalComponent>
                <Nav.Link className="text-dark" href="/about">
                  About
                </Nav.Link>
                <Nav.Link className="text-dark" href="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link className="text-dark" href="/portfolio">
                  Portfolio
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
