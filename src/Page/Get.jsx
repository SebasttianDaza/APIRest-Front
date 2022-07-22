import Container from "react-bootstrap/Container";
import ReactJson from "react-json-view";
import { useState } from "react";
import { FormOnlySelect } from "@Components/Forms";
import { SubTitle, Paragraph } from "@Components/Title";
import { Code } from "@Components/Code";
import { TableBasic } from "@Components/Table";

import { ReturnInformation, ReturnInformationTable, ReturnFormData } from "./Utils";

const Get = ({}) => {
  const [show, setShow] = useState("Embarcaciones");

  const handleChange = (e) => {
    e.preventDefault();
    setShow(e.target.value);
  };

  return (
    <>
      <SubTitle title="Resources List/Pagination" className="text-dark" />
      <Paragraph>
        Calling any API endponit with a ID or page will return a resource or a list of resources. By
        default, every list it has 100 resources. Until this momento there isn&apos;t a way to
        choose a limit. For method GET you don&apos;t need to be authenticated or any token.
      </Paragraph>
      <FormOnlySelect data={ReturnFormData()} state={show} handleChange={handleChange} />
      <Code className={"mt-2"}>
        <Container>
          {show === "Embarcaciones" ? (
            <ReactJson src={ReturnInformation(show)} name={false} />
          ) : show === "Users" ? (
            <ReactJson src={ReturnInformation(show)} name={false} />
          ) : show === "Sales" ? (
            <ReactJson src={ReturnInformation(show)} name={false} />
          ) : null}
        </Container>
      </Code>
      <TableBasic data={ReturnInformationTable(show)} />
    </>
  );
};

export default Get;
