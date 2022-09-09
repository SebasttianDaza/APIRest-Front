import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import { ErrorFallback } from "@/Errors";

const Code = ({ children, className }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <pre className={"bg-light border pt-3 pb-2" + " " + className} style={{ height: "300px" }}>
          <code>{children}</code>
        </pre>
      </ErrorBoundary>
    </>
  );
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Code;
