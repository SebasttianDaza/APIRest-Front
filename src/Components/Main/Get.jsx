import { ErrorBoundary } from "react-error-boundary";
import Container from "react-bootstrap/Container";
import { useState } from "react";

import ErrorFallback from "../../Errors/handleErrors";
import SubTitle from "../Title/Subtitle";
import Paragraph from "../Title/Paragraph";
import BasicForm from "../Forms/BasicForm";
import Code from "../Code/Code";
import TableBasic from "../Table/TableBasic";

const Form = [
  {
    type: "select",
    label: "",
    controlId: "formBasicGet",
    selectSettings: {
      ariaLabel: "C",
      options: [
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
      ],
    },
  },
];

const Table = [
    
]

const Get = ({}) => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SubTitle title="Resources List/Pagination" className="text-dark" />
        <Paragraph>
          Calling any API endponit with a ID or page will return a resource or a list of resources.
          By default, every list it has 100 resources. Until this momento there isn&apos;t a way to
          choose a limit. For method GET you don&apos;t need to be authenticated or any token.
        </Paragraph>
        <BasicForm
          inputInfo={Form}
          settings={{
            variant: "success",
            text: "Get",
            className: "mt-2 mb-2 invisible",
          }}
          event={() => {}}
          submit={setShow}
        />
        <Code>
          <Container />
        </Code>
        {/* <TableBasic data={Table} /> */}
      </ErrorBoundary>
    </>
  );
};

export default Get;
