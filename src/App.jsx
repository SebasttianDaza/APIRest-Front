import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Title } from "@Components/Title";
import NavBar from "@Components/Navbar/Navbar";
import Header from "@Components/Header/Header";

import { Get, Authentication, GetUnit, Post, Put, Delete } from "@/Page";
import { useMatchMedia } from "@/Hooks";

const App = () => {
  const isActive = useMatchMedia();

  return (
    <>
      <Container className="mt-2" fluid>
        <Row>
          {isActive && (
            <Col md={3}>
              <NavBar />
            </Col>
          )}
          {!isActive && (
            <>
              <Col xs={6}>
                <NavBar />
              </Col>
              <Col xs={6}>
                <Title title="Ships Rest" />
              </Col>
            </>
          )}
          <Col md={8}>
            <Container fluid>
              {isActive && <Title title="Ships Rest" />}
              <Header id="header" />
              <hr />
              <Authentication />
              <hr />
              <Get />
              <hr />
              <GetUnit />
              <hr />
              <Post />
              <hr />
              <Put />
              <hr />
              <Delete id="delete" />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
