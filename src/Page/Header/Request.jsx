import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Forms } from "@Components/Forms";
import { Code } from "@Components/Code";
import { Loading } from "@Components/Spinners";
import { RenderJson } from "@Components/Json";

import { ReturnDataForm } from "./Utils";

import { useFetch } from "@/Hooks";
import { ErrorFallback } from "@/Errors";

const Request = ({ idRequest }) => {
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
        <section id={idRequest}>
          <h3>Try it now!</h3>
          <Forms
            inputInfo={ReturnDataForm()}
            settings={{
              variant: "success",
              text: "Request",
              className: "mb-2",
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
                  return <RenderJson key={ship.id} data={ship} settings={{ name: false }} />;
                })
              ) : (
                <RenderJson data={stateRequest.data} settings={{ name: false }} />
              )}
            </Container>
          </Code>
        </section>
      </ErrorBoundary>
    </>
  );
};

Request.propTypes = {
  idRequest: PropTypes.string.isRequired,
};

export default Request;
