import "./Modal.scss";
import { FaExpand } from "react-icons/fa";

const ModalOverlay = ({
  children,
  togglerFunc,
  togglerIcon = <FaExpand />,
}) => {
  return (
    <div className="modal-overlay">
      {children}
      <button className="toggler" onClick={togglerFunc}>
        {togglerIcon}
      </button>
    </div>
  );
};

export default ModalOverlay;
