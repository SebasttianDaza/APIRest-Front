import { ErrorBoundary } from "react-error-boundary";
import ReactJson from "react-json-view";
import PropTypes from "prop-types";

import { ErrorFallback } from "@/Errors";

const RenderJson = ({ src, settings }) => {
  const { name } = settings;
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReactJson src={src} name={name} />
    </ErrorBoundary>
  );
};

RenderJson.propTypes = {
  src: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

export default RenderJson;
