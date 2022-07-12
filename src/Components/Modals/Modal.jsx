import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

import ErrorFallback from "../../Errors/handleErrors";
import AnyButton from "../Button/Button";

const ModalComponent = ({ children, info }) => {
  const [show, setShow] = useState(false);
  const { variant, text } = info;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AnyButton settings={{ variant, className: "" }} text={text} event={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Register</Modal.Header>
          <Modal.Body>{children}</Modal.Body>
        </Modal>
      </ErrorBoundary>
    </>
  );
};

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  info: PropTypes.object.isRequired,
};

export default ModalComponent;
