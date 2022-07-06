import Navbar from "react-bootstrap/Nav";
import Nav from "react-bootstrap/Nav";

const NavBar = ({}) => {
  return (
    <>
      <Navbar
        defaultActiveKey="/home"
        className="navbar-light flex-column align-items-stretch text-warning"
      >
        <Nav.Link href="/" className="text-warning">
          Home
        </Nav.Link>
        <Nav className="nav-pills flex-column">
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
      </Navbar>
    </>
  );
};

export default NavBar;
