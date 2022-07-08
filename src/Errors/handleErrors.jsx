import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Card role="alert">
      <Card.Body>
        <Card.Title className="text-danger">Something went wrong:</Card.Title>
        <Card.Text className="text-white">{error.message}</Card.Text>
        <button onClick={resetErrorBoundary}>Try Again</button>
      </Card.Body>
    </Card>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
