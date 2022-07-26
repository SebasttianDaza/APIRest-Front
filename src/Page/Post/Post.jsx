import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { SubtitleWithBadge, Paragraph } from "@Components/Title";
import { FormOnlySelect } from "@Components/Forms";
import { Code } from "@Components/Code";
import { RenderJson } from "@Components/Json";

import { ReturnInformation } from "./Utils";

import { useHandleState } from "@/Hooks";
import { GetLocation } from "@/Utils";

const Post = ({ id }) => {
  const { show, view, handleChange, handleView } = useHandleState();

  return (
    <>
      <section id={id}>
        <SubtitleWithBadge title="Create resource" className="text-dark" badge="POST" />
        <Paragraph>
          To create a resource you need a token, that&lsquo;s it you need be authenticated, and you
          need send the correct body.
        </Paragraph>
        <FormOnlySelect
          data={[
            {
              value: "Embarcaciones",
              text: `${GetLocation()}embarcaciones`,
            },
            {
              value: "Users",
              text: `${GetLocation()}users`,
            },
            {
              value: "Sales",
              text: `${GetLocation()}sales`,
            },
          ]}
          state={show}
          handleChange={handleChange}
          disabled={view === "Body" ? false : true}
        />
        <SubtitleWithBadge title="" className="mt-3" badge="" />
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
          state={view}
          handleChange={handleView}
        />
        <Code className={"mt-2"}>
          <Container>
            <RenderJson
              src={
                view === "Body"
                  ? ReturnInformation(show)
                  : {
                      status: "ok",
                      result: {
                        id: "25",
                      },
                    }
              }
              settings={{ name: false }}
            />
          </Container>
        </Code>
      </section>
    </>
  );
};

Post.propTypes = {
  id: PropTypes.string,
};

export default Post;
