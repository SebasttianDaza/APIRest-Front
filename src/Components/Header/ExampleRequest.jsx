import { ErrorBoundary } from "react-error-boundary";
import ReactJson from "react-json-view";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { BasicForm } from "@Components/Forms";
import { Code } from "@Components/Code";
import { Loading } from "@Components/Spinners";

import { useFetch } from "@/Hooks";
import { ErrorFallback } from "@/Errors";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const selected = e.target.querySelector("select").value;
    setShow(selected);
  };

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
          handleSubmit={handleSubmit}
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
                return <ReactJson src={ship} name={false} key={ship.id} />;
              })
            ) : (
              <ReactJson src={{ status: "Null" }} name={false} />
            )}
          </Container>
        </Code>
      </ErrorBoundary>
    </>
  );
};

export default ExampleRequest;
