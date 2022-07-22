import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import { ErrorFallback } from "@/Errors";

const FormDisable = ({ data, className }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form className={className}>
          <fieldset disabled>
            {data.map((input) => {
              return (
                <Form.Group key={input.controlId} controlId={input.controlId}>
                  {input.label && <Form.Label>{input.label}</Form.Label>}
                  {input.control && (
                    <Form.Control type={input.control} placeholder={input.placeholder} />
                  )}
                </Form.Group>
              );
            })}
          </fieldset>
        </Form>
      </ErrorBoundary>
    </>
  );
};

FormDisable.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default FormDisable;
