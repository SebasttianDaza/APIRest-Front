import { ErrorBoundary } from "react-error-boundary";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { FormOnlySelect } from "@Components/Forms";
import { SubTitle, Paragraph } from "@Components/Title";
import { Code } from "@Components/Code";

import { ErrorFallback } from "@/Errors";

const Form = [
  {
    value: "Embarcaciones",
    text: `${window.location.origin}/embarcaciones?page=1`,
  },
  {
    value: "Users",
    text: `${window.location.origin}/users?page=1`,
  },
  {
    value: "Sales",
    text: `${window.location.origin}/sales?page=1`,
  },
];

const Get = ({}) => {
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setShow(e.target.value);
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SubTitle title="Resources List/Pagination" className="text-dark" />
        <Paragraph>
          Calling any API endponit with a ID or page will return a resource or a list of resources.
          By default, every list it has 100 resources. Until this momento there isn&apos;t a way to
          choose a limit. For method GET you don&apos;t need to be authenticated or any token.
        </Paragraph>
        <FormOnlySelect data={Form} state={show} handleChange={handleChange} />
        <Code>
          <Container>
            {show === "Embarcaciones" ? (
              <>
                <Paragraph>Embarcaciones:</Paragraph>
              </>
            ) : show === "Users" ? (
              <>
                <Paragraph>Users:</Paragraph>
              </>
            ) : show === "Sales" ? (
              <>
                <Paragraph>Sales:</Paragraph>
              </>
            ) : null}
          </Container>
        </Code>
        {/* <TableBasic data={Table} /> */}
      </ErrorBoundary>
    </>
  );
};

export default Get;
