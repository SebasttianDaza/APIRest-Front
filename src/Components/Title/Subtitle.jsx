import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleErrors";

const SubTitle = ({ title, className }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h1 className={className}>{title}</h1>
      </ErrorBoundary>
    </>
  );
};

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SubTitle;
