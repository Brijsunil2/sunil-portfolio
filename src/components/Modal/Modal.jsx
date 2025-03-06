import { forwardRef } from "react";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";

const Modal = forwardRef(({ children, toggleModal }, ref) => {
  return (
    <dialog
      className="modal"
      ref={ref}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          toggleModal();
        }
      }}
    >
      <button className="modal-close-btn" onClick={() => toggleModal()}>
        <IoMdClose />
      </button>
      <div className="modal-content">{children}</div>
    </dialog>
  );
});

export default Modal;
