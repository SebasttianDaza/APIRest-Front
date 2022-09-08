import { ErrorBoundary } from "react-error-boundary";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

import { ErrorFallback } from "@/Errors";

const Loading = ({ settings }) => {
  const { variant, text, className, animation } = settings;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Spinner animation={animation} variant={variant} role="status" className={className}>
          <span className="visually-hidden">{text}</span>
        </Spinner>
      </ErrorBoundary>
    </>
  );
};

Loading.propTypes = {
  settings: PropTypes.shape({
    variant: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    animation: PropTypes.string,
  }).isRequired,
};

export default Loading;
