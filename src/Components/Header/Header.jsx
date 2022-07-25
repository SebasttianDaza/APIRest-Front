import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleErrors";
import Paragraph from "../Title/Paragraph";

import ExampleRequest from "./ExampleRequest";

const Header = ({ id }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header id={id}>
          <Paragraph>
            This is a consumption only API. It has HTTP GET, POST, PUT and DELETE.
          </Paragraph>
          <h6 className="">
            This API required authentication to access, for all resources and of course also you
            need a user. You can to get a user, registering and login.
          </h6>
          <br />
          <Paragraph>
            After you got a user, you can to get all resources, when you try to do request, you get
            a token, with token you&apos;ve use to do all request.
          </Paragraph>
          <hr />
          <ExampleRequest />
        </header>
      </ErrorBoundary>
    </>
  );
};

Header.propTypes = {
  id: PropTypes.string,
};

export default Header;
