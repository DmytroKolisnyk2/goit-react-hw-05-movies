import React from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";

const modalRef = document.querySelector("#root-modal");

const Modal = (props) => {
  return createPortal(
    <div className="Overlay">
      <div className="Modal">{props.children}</div>
    </div>,
    modalRef
  );
};

export default Modal;
