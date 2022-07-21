import { ErrorBoundary } from "react-error-boundary";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { FormOnlySelect } from "@Components/Forms";
import { SubTitle, Paragraph } from "@Components/Title";
import { Code } from "@Components/Code";
import { TableBasic } from "@Components/Table";

import { ReturnInformation, ReturnInformationTable, ReturnFormData } from "./Utils";

import { ErrorFallback } from "@/Errors";

const Get = ({}) => {
  const [show, setShow] = useState("Embarcaciones");

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
        <FormOnlySelect data={ReturnFormData()} state={show} handleChange={handleChange} />
        <Code className={"mt-2"}>
          <Container>
            {show === "Embarcaciones" ? (
              <Paragraph>{JSON.stringify(ReturnInformation(show))}</Paragraph>
            ) : show === "Users" ? (
              <Paragraph>{JSON.stringify(ReturnInformation(show))}</Paragraph>
            ) : show === "Sales" ? (
              <Paragraph>{JSON.stringify(ReturnInformation(show))}</Paragraph>
            ) : null}
          </Container>
        </Code>
        <TableBasic data={ReturnInformationTable(show)} />
      </ErrorBoundary>
    </>
  );
};

export default Get;
