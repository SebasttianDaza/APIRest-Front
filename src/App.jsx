import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Title } from "@Components/Title";
import NavBar from "@Components/Navbar/Navbar";

import { Get, Authentication, GetUnit, Post, Put, Delete, Header } from "@/Page";
import { useMatchMedia } from "@/Hooks";

const App = () => {
  const isActive = useMatchMedia();

  return (
    <>
      <Container className="mt-2" fluid>
        <Row>
          {isActive && (
            <>
              <Col md={3} className="position-fixed start-0 h-100 border-end">
                <NavBar />
              </Col>
              <Col md={3} />
            </>
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
              <Header id="header" idRequest="request" />
              <hr />
              <Authentication id="authentication" />
              <hr />
              <Get id="get" />
              <hr />
              <GetUnit id="getunit" />
              <hr />
              <Post id="post" />
              <hr />
              <Put id="put" />
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
