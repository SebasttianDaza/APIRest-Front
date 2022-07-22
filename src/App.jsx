import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Title } from "@Components/Title";
import NavBar from "@Components/Navbar/Navbar";
import Header from "@Components/Header/Header";

import { Get, Authentication } from "@/Page";
import { useMatchMedia } from "@/Hooks";

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
              <hr />
              <Authentication />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
