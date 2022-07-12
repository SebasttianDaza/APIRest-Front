import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleErrors";
import AnyButton from "../Button/Button";

/**
 * {
 * type: "Text",
 * label: "",
 * controlId: "",
 * ControlType: {
 *      type: "",
 *   placeholder: "",
 *  }
 * }
 *
 *
 * {
 *  type: "Select",
 * label: "",
 * controlId: "",
 * selectSettings: {
 *  ariaLabel: "",
 *  options: [
 *     {
 *        value: "",
 *       text: "",
 *     }
 *  ]
 * }
 * }
 */
const BasicForm = ({ inputInfo, event, settings, submit }) => {
  const { variant, className, text } = settings;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const selected = e.target.querySelector("select").value;
    submit(selected);
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form onSubmit={handleSubmit}>
          {inputInfo.map((input) => {
            return (
              <Form.Group key={input.controlId} controlId={input.controlId}>
                {input.label && <Form.Label>{input.label}</Form.Label>}
                {input.type === "text" && (
                  <Form.Control
                    required
                    type={input.ControlType.type}
                    placeholder={input.ControlType.placeholder}
                  />
                )}

                {input.type === "select" && (
                  <Form.Select aria-label={input.selectSettings.ariaLabel}>
                    {input.selectSettings.options.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      );
                    })}
                  </Form.Select>
                )}
              </Form.Group>
            );
          })}
          <AnyButton settings={{ variant, className, type: "submit" }} text={text} event={event} />
        </Form>
      </ErrorBoundary>
    </>
  );
};

BasicForm.propTypes = {
  inputInfo: PropTypes.array.isRequired,
  event: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};

export default BasicForm;
