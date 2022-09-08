import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import { ErrorFallback } from "@/Errors";

const Title = ({ title }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h1 className="text-warning text-left">{title}</h1>
      </ErrorBoundary>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
