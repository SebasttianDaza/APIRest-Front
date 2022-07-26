import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { FormOnlySelect } from "@Components/Forms";
import { SubtitleWithBadge, Paragraph } from "@Components/Title";
import { Code } from "@Components/Code";
import { TableBasic } from "@Components/Table";
import { RenderJson } from "@Components/Json";

import { ReturnInformation, ReturnInformationTable, ReturnFormData } from "./Utils";

const Get = ({ id }) => {
  const [show, setShow] = useState("Embarcaciones");

  const handleChange = (e) => {
    e.preventDefault();
    setShow(e.target.value);
  };

  return (
    <>
      <section id={id}>
        <SubtitleWithBadge title="Resources List/Pagination" className="text-dark" badge="GET" />
        <Paragraph>
          Calling any API endponit with a ID or page will return a resource or a list of resources.
          By default, every list it has 100 resources. Until this momento there isn&apos;t a way to
          choose a limit. For method GET you don&apos;t need to be authenticated or any token.
        </Paragraph>
        <FormOnlySelect data={ReturnFormData()} state={show} handleChange={handleChange} />
        <Code className={"mt-2"}>
          <Container>
            {show === "Embarcaciones" ? (
              <RenderJson src={ReturnInformation(show)} settings={{ name: false }} />
            ) : show === "Users" ? (
              <RenderJson src={ReturnInformation(show)} settings={{ name: false }} />
            ) : show === "Sales" ? (
              <RenderJson src={ReturnInformation(show)} settings={{ name: false }} />
            ) : null}
          </Container>
        </Code>
        <TableBasic data={ReturnInformationTable(show)} />
      </section>
    </>
  );
};

Get.propTypes = {
  id: PropTypes.string,
};

export default Get;
