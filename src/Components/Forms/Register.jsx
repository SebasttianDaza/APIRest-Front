import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";
import { useFetch } from "@Hooks";
import { useState, useEffect } from "react";
import { GetRegister } from "@Utils";

import ErrorFallback from "../../Errors/handleErrors";
import AnyButton from "../Button/Button";

const Register = ({}) => {
  const [register, setRegister] = useState({});
  const [stateRequest, fecthRequest] = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target.elements;
    let data;
    if (formData.length > 1) {
      data = {
        username: formData["formBasicUsername"].value,
        email: formData["formBasicEmail"].value,
        password: formData["formBasicPassword"].value,
      };
    }
    setRegister(data);
  };

  useEffect(() => {
    fecthRequest({
      url: GetRegister(),
      method: "POST",
      body: JSON.stringify(register),
    });
  }, [register, fecthRequest]);

  console.log(stateRequest);

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
