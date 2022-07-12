import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "./Components/Navbar/Navbar.jsx";
import Title from "./Components/Title/Title.jsx";
import Header from "./Components/Header/Header.jsx";
import useMatchMedia from "./Hooks/useMatchMedia.jsx";
import Get from "./Components/Main/Get.jsx";

const App = () => {
  const isActive = useMatchMedia();
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col xs={6}>
            <NavBar />
          </Col>
          {!isActive && (
            <Col xs={6}>
              <Title title="Ships Rest" />
            </Col>
          )}
          <Col md={8}>
            <Container fluid>
              {isActive ? <Title title="Ships Rest" /> : null}
              <Header />
              <hr />
              <Get />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
