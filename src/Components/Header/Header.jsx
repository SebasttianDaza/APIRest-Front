import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleErrors";

import ExampleRequest from "./ExampleRequest";

const Header = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header>
          <p>This is a consumption only API. It has HTTP GET, POST, PUT and DELETE.</p>
          <h6 className="">
            This API required authentication to access, for all resources and of course also you
            need a user. You can to get a user, registering and login.
          </h6>
          <br />
          <p>
            After you got a user, you can to get all resources, when you try to do request, you get
            a token, with token you&apos;ve use to do all request.
          </p>
          <hr />
          <ExampleRequest />
        </header>
      </ErrorBoundary>
    </>
  );
};

export default Header;
