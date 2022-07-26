import { ErrorBoundary } from "react-error-boundary";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

import { ErrorFallback } from "@/Errors";

const SubtitleWithBadge = ({ title, className, badge }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h2 className={className}>
          {title}
          <Badge>{badge}</Badge>
        </h2>
      </ErrorBoundary>
    </>
  );
};

SubtitleWithBadge.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  badge: PropTypes.string,
};

export default SubtitleWithBadge;
