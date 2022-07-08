import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleErrors";
import AnyButton from "../Button/Button";

/**
 * {
 * label: "",
 * controlId: "",
 * ControlType: {
 *      type: "",
 *   placeholder: "",
 *  }
 * }
 */
const BasicForm = ({ inputInfo, event, settings }) => {
  const { variant, className, text } = settings;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form>
          {inputInfo.map((input) => {
            return (
              <Form.Group key={input.controlId} controlId={input.controlId}>
                {input.label && <Form.Label>{input.label}</Form.Label>}
                <Form.Control
                  type={input.ControlType.type}
                  placeholder={input.ControlType.placeholder}
                />
              </Form.Group>
            );
          })}
          <AnyButton settings={{ variant, className }} text={text} event={event} />
        </Form>
      </ErrorBoundary>
    </>
  );
};

BasicForm.propTypes = {
  inputInfo: PropTypes.array.isRequired,
  event: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default BasicForm;
