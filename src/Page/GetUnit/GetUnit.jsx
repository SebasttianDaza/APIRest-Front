import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { SubtitleWithBadge, Paragraph } from "@Components/Title";
import { FormOnlySelect } from "@Components/Forms";
import { Code } from "@Components/Code";
import { RenderJson } from "@Components/Json";

import { ReturnInformation } from "./Utils";

import { useHandleState } from "@/Hooks";
import { GetLocation } from "@/Utils";

const GetUnit = ({ id }) => {
  const { show, handleChange } = useHandleState();

  return (
    <>
      <section id={id}>
        <SubtitleWithBadge title="Get Unit" className="text-dark" badge="GET" />
        <Paragraph>
          You also can to get a resource for every endpoint. Also you need know the ID of the
          resource you getting and you&lsquo;re authenticated.
        </Paragraph>
        <FormOnlySelect
          data={[
            {
              value: "Embarcaciones",
              text: `${GetLocation()}ship/1`,
            },
            {
              value: "Users",
              text: `${GetLocation()}user/1`,
            },
            {
              value: "Sales",
              text: `${GetLocation()}sale/1`,
            },
          ]}
          state={show}
          handleChange={handleChange}
        />
        <Code className={"mt-2"}>
          <Container>
            <RenderJson src={ReturnInformation(show)} settings={{ name: false }} />
          </Container>
        </Code>
      </section>
    </>
  );
};

GetUnit.propTypes = {
  id: PropTypes.string,
};

export default GetUnit;
