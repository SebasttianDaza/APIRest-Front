import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

import { ErrorFallback } from "@/Errors";

/**
 *
 * @param {*} param0
 *  {
            thead: {
                tr: {
                    th:"Name",
                    th:"Email",
                    th:"Phone",
                }
            },
            tbody: {
                tr: {
                    td:"Name",
                    td:"Email",
                    td:"Phone",
                }, 
                tr: {
                    td:"Name",
                    td:"Email",
                    td:"Phone",
                }
            }
        }
 * 
 * @returns
 */

const TableBasic = ({ data }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Table striped bordered hover>
          <thead>
            {data.thead.map((item, index) => {
              return (
                <tr key={index}>
                  {item.tr.map((th) => {
                    return <th key={th}>{th}</th>;
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody>
            {data.tbody.map((item, index) => {
              return (
                <tr key={index}>
                  {item.tr.map((td) => {
                    return <td key={td}>{td}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ErrorBoundary>
    </>
  );
};

TableBasic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TableBasic;
