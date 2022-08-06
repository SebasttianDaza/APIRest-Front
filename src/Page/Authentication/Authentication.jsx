import PropTypes from "prop-types";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { SubtitleWithBadge, Paragraph } from "@Components/Title";
import { FormDisable, FormOnlySelect } from "@Components/Forms";
import { Code } from "@Components/Code";
import { RenderJson } from "@Components/Json";

import { ReturnJson } from "./Utils";

import { GetLocation } from "@/Utils";

const Authentication = ({ id }) => {
  const [show, setShow] = useState("Body");

  const handleChange = (e) => {
    setShow(e.target.value);
  };

  return (
    <>
      <section id={id}>
        <SubtitleWithBadge title="Authentication" className="text-dark" badge="POST" />
        <Paragraph>For can to call every resources you need to be authenticated.</Paragraph>
        <FormDisable
          data={[
            {
              controlId: "disableTextId",
              label: "EndPoint",
              control: "text",
              placeholder: `${GetLocation()}auth`,
            },
          ]}
          className="mb-2"
        />
        <FormOnlySelect
          data={[
            {
              value: "Body",
              text: "Body",
            },
            {
              value: "Preview",
              text: "Preview",
            },
          ]}
          state={show}
          handleChange={handleChange}
        />
        <Code className={"mt-2"}>
          <Container>
            <RenderJson src={ReturnJson(show)} settings={{ name: false }} />
          </Container>
        </Code>
      </section>
    </>
  );
};

Authentication.propTypes = {
  id: PropTypes.string,
};

export default Authentication;
