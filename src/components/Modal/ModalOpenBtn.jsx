import "./Modal.scss";
import { useRef } from "react";
import { IoOpenOutline } from "react-icons/io5";
import Modal from "./Modal";

const ModalOpenBtn = ({ children }) => {
  const modalRef = useRef(null);

  const toggleModal = () => {
    if (!modalRef.current) return;

    modalRef.current.hasAttribute("open")
      ? modalRef.current.close()
      : modalRef.current.showModal();
  };

  return (
    <>
      <div className="modal-open-btn-container">
        <button className="modal-open-btn" onClick={() => toggleModal()}>
          <IoOpenOutline />
        </button>
        <div className="modal-open-btn-content">{children}</div>
      </div>
      <Modal toggleModal={toggleModal} ref={modalRef} >
        {children}
      </Modal>
    </>
  );
};

export default ModalOpenBtn;
