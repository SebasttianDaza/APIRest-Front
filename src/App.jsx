import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "./Components/Navbar/Navbar.jsx";
import Title from "./Components/Title/Title.jsx";

const App = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md lg="2">
            <NavBar />
          </Col>
          <Col md lg="auto">
            <Container fluid>
              <Row>
                <Title title="Ships Rest" />
              </Row>
              <Row>
                <h2>Hello World!</h2>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
