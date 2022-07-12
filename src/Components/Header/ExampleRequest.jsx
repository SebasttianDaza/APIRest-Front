import { ErrorBoundary } from "react-error-boundary";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import ErrorFallback from "../../Errors/handleErrors";
import BasicForm from "../Forms/BasicForm";
import useFetch from "../../Hooks/useFetch";
import Code from "../Code/Code";
import Loading from "../Spinners/Loading";

const Form = [
  {
    type: "select",
    label: "",
    controlId: "formBasicRequest",
    selectSettings: {
      ariaLabel: "Choose request type",
      options: [
        {
          value: "Embarcaciones",
          text: "Embarcaciones",
        },
        {
          value: "Users",
          text: "Users",
        },
        {
          value: "Sales",
          text: "Sales",
        },
      ],
    },
  },
];

const ExampleRequest = () => {
  const [show, setShow] = useState(false);
  const [stateRequest, fecthRequest] = useFetch();

  useEffect(() => {
    if (show) {
      fecthRequest({
        url: `http://localhost/APIRest/${show.toLowerCase()}?page=1`,
        method: "GET",
        body: null,
      });
    }
  }, [show, fecthRequest]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h3>Try it now!</h3>
        <BasicForm
          inputInfo={Form}
          settings={{
            variant: "success",
            text: "Request",
            className: "mt-2 mb-2",
          }}
          event={() => {}}
          submit={setShow}
        />
        <Code>
          <Container>
            {stateRequest.isLoading ? (
              <Loading
                settings={{
                  variant: "primary",
                  text: "Loading...",
                  className: "",
                  animation: "border",
                }}
              />
            ) : stateRequest.data !== null ? (
              stateRequest.data.map((ship) => {
                return <p key={ship.id}>{JSON.stringify(ship)}</p>;
              })
            ) : (
              <p>{JSON.stringify({ status: "Null" })}</p>
            )}
          </Container>
        </Code>
      </ErrorBoundary>
    </>
  );
};

export default ExampleRequest;
