import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";
import { useFetch } from "@Hooks";
import { useState, useEffect } from "react";
import { GetRegister } from "@Utils";
import { Title } from "@Components/Title";
import { AnyButton } from "@Components/Button";
import { Loading } from "@Components/Spinners";

import { ErrorFallback } from "@/Errors";

const Register = ({}) => {
  const [register, setRegister] = useState({});
  const [stateRequest, fecthRequest] = useFetch();
  const [render, setRender] = useState(false);

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
    setRender(true);
  };

  useEffect(() => {
    fecthRequest({
      url: GetRegister(),
      method: "POST",
      body: JSON.stringify(register),
    });
  }, [register, fecthRequest]);

  if (!render) {
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
              settings={{
                variant: "success",
                className: "mt-2",
                type: "submit",
              }}
              text="Register"
              event={() => {}}
            />
          </Form>
        </ErrorBoundary>
      </>
    );
  }

  if (render) {
    return (
      <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {stateRequest.isLoading ? (
            <Loading
              settings={{
                variant: "primary",
                text: "Loading...",
                className: "",
                animation: "border",
              }}
            />
          ) : stateRequest.isError || stateRequest.data === null ? (
            <>
              <Title title="Something went wrong" />
              <AnyButton
                settings={{
                  variant: "danger",
                  className: "mt-2",
                  type: "button",
                }}
                text="Try again"
                event={() => setRender(false)}
              />
            </>
          ) : stateRequest.data.code === 200 ? (
            <>
              <Title title="Register success" />
              <AnyButton
                settings={{
                  variant: "success",
                  className: "mt-2",
                  type: "button",
                }}
                text="Go back"
                event={() => setRender(false)}
              />
            </>
          ) : (
            <>
              <Title title="Something went wrong" />
              <AnyButton
                settings={{
                  variant: "danger",
                  className: "mt-2",
                  type: "button",
                }}
                text="Try again"
                event={() => setRender(false)}
              />
            </>
          )}
        </ErrorBoundary>
      </>
    );
  }
};

export default Register;
