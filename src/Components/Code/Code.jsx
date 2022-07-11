import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleErrors";

const Code = ({ children }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <pre className="bg-light border pt-3 pb-2">
          <code>{children}</code>
        </pre>
      </ErrorBoundary>
    </>
  );
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Code;
