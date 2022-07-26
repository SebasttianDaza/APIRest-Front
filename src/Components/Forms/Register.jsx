import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";

import ErrorFallback from "../../Errors/handleErrors";
import AnyButton from "../Button/Button";

const Register = ({}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target.elements;
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter password" />
          </Form.Group>
          <AnyButton
            settings={{ variant: "success", className: "mt-2", type: "submit" }}
            text="Register"
            event={() => {}}
          />
        </Form>
      </ErrorBoundary>
    </>
  );
};

export default Register;
