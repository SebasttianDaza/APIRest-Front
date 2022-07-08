import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleErrors";
import BasicForm from "../Forms/BasicForm";

const Form = [
  {
    label: "",
    controlId: "formBasicRequest",
    ControlType: {
      type: "text",
      placeholder: "",
    },
  },
];

const ExampleRequest = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h3>Try it now!</h3>
        <BasicForm
          inputInfo={Form}
          settings={{
            variant: "success",
            text: "Request",
            className: "mt-2 mb-2",
          }}
          event={() => {}}
        />
      </ErrorBoundary>
    </>
  );
};

export default ExampleRequest;
