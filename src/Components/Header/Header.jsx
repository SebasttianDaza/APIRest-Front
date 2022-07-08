import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleErrors";

const Header = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header>
          <p>This is a consumption only API. it has HTTP GET, POST, PUT and DELETE.</p>
          <h6>
            This API required authentication to access, for all resources and of course also you
            need a user. You can to get a user,
            <a href="#"> registering </a>
            and login.
          </h6>
        </header>
      </ErrorBoundary>
    </>
  );
};

export default Header;
