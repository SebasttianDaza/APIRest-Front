import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import { ErrorFallback } from "@/Errors";

const AnyButton = ({ settings, text, event }) => {
  const { variant, className, type } = settings;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button variant={variant} type={type} onClick={event} className={className}>
          {text}
        </Button>
      </ErrorBoundary>
    </>
  );
};

AnyButton.propTypes = {
  settings: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default AnyButton;
