import { MdOutlineOpenInNew } from "react-icons/md";

const OpenModal = ({ children, onOpen }) => {
  return (
    <div className="model-open">
      <button onClick={onOpen}>
        <MdOutlineOpenInNew />
      </button>
      {children}
    </div>
  );
};

export default OpenModal;
