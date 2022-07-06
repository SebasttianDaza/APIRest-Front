import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "./Components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      <Container fluid>
        <Row lg="2">
          <Col>
            <NavBar />
          </Col>
          <Col>
            <h1>Hello World!</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
