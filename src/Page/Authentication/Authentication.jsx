import ReactJson from "react-json-view";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { SubtitleWithBadge, Paragraph } from "@Components/Title";
import { FormDisable, FormOnlySelect } from "@Components/Forms";
import { Code } from "@Components/Code";

const Authentication = () => {
  const [show, setShow] = useState("Body");

  const handleChange = (e) => {
    setShow(e.target.value);
  };

  return (
    <>
      <SubtitleWithBadge title="Authentication" className="text-dark" badge="POST" />
      <Paragraph>For can to call every resources you need to be authenticated.</Paragraph>
      <FormDisable
        data={[
          {
            controlId: "disableTextId",
            label: "EndPoint",
            control: "text",
            placeholder: window.location + "auth",
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
          <ReactJson
            src={
              show === "Body"
                ? {
                    username: "yourusername",
                    password: "yourpassword",
                  }
                : {
                    status: "ok",
                    result: {
                      id: 1,
                      status: "active",
                      token: "yourtoken",
                    },
                  }
            }
            name={false}
          />
        </Container>
      </Code>
    </>
  );
};

export default Authentication;
