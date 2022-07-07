import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import ErrorFallback from "../../Errors/handleErrors";

const AnyButton = ({ variant, text, event }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button variant={variant} onClick={event}>
          {text}
        </Button>
      </ErrorBoundary>
    </>
  );
};

AnyButton.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default AnyButton;
