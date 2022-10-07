import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import "./index.scss";

const modalRootElement = document.querySelector("#modal");

const Modal = ({ children, isModalOpen, onClose }) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (isModalOpen) {
      modalRootElement.appendChild(element);

      return () => modalRootElement.removeChild(element);
    }
  });

  if (isModalOpen) {
    return createPortal(
      <div className="modal__background">
        <div className="modal__card">
          <button className="modal__close" onClick={onClose}>
            X
          </button>
          <div className="modal__content">{children}</div>
        </div>
      </div>,
      element
    );
  }

  return null;
};

export default Modal;
