import Postcode from "@actbase/react-daum-postcode";
import React from "react";
import Modal from "react-bootstrap/Modal";

function PostCodeModal({ show, handleClose, handleCompletePostCode }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Postcode
          jsOptions={{ animate: true }}
          onSelected={(data) => handleCompletePostCode(data)}
        />
      </Modal>
    </div>
  );
}

export default PostCodeModal;
