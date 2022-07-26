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
  const [thead, tbody] = data;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Table striped bordered hover>
          <thead>
            <tr>
              {thead.tr.map((td) => {
                return <th key={td}>{td}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tbody.map((tr) => {
              return (
                <tr key={tr}>
                  {tr.map((td) => {
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
  data: PropTypes.array.isRequired,
};

export default TableBasic;
