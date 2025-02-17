import "./ButtonPills.scss";

const ButtonPills = ({ img, name }) => {
  return (
    <div className="btn-pill-container">
      {img && <img src={img} alt={name} />}
      {name}
    </div>
  );
};

export default ButtonPills;
