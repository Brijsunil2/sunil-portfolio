import "./ButtonPills.scss";

const ButtonPills = ({ img, name }) => {
  return (
    <div className="btn-pill-container">
      {img && <img src={img} alt={name} />}
      <small>{name}</small>
    </div>
  );
};

export default ButtonPills;
