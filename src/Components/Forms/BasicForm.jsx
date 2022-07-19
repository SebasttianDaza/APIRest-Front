import { ErrorBoundary } from "react-error-boundary";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { AnyButton } from "@Components/Button";

import { ErrorFallback } from "@/Errors";

/**
 *
 * It's a component should to receive a object with that properties:
 * - type: string,
 * - label: string,
 * - controlId: string,
 * - ControlType: {
 *  - type: string,
 *  - placeholder: string,
 * }
 *
 *  If the form is a select, the object should have the following properties:
 *  To change ControlType to SelectSettings,
 *  selectSettings: {
 *  ariaLabel: string,
 *  options: [
 *      {
 *        value: string,
 *        text: string,
 *      }
 *    ]
 *  }
 */

const BasicForm = ({ inputInfo, settings, handleSubmit }) => {
  const { variant, className, text } = settings;

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
          <AnyButton
            settings={{ variant, className, type: "submit" }}
            text={text}
            event={() => {}}
          />
        </Form>
      </ErrorBoundary>
    </>
  );
};

BasicForm.propTypes = {
  inputInfo: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default BasicForm;
