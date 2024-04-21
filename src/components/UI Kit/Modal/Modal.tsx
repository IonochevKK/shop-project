import React from "react";
import CloseSvg from "../../../../public/svg/close.svg?react";
import "./modal.scss";
import { createPortal } from "react-dom";
interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({
  closeModal,
  isOpen,
  children,
  style,
}) => {
  const root = document.getElementById("root") as Element;
  return (
    <>
      {createPortal(
        <div className="modal">
          {isOpen && (
            <div className="modal-content">
              <div className="modal-item" style={style}>
                <div className="close" onClick={closeModal}>
                  <CloseSvg />
                </div>
                {children}
              </div>
            </div>
          )}
        </div>,
        root
      )}
    </>
  );
};

export default Modal;
