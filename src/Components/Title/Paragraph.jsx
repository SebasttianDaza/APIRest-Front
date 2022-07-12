import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleErrors";

const Paragraph = ({ children, className }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <p className={className}>{children}</p>
      </ErrorBoundary>
    </>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
