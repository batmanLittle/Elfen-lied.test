import "./ButtonClose.css";
import iconClose from "../../images/icon-close.svg";

const ButtonClose = ({ handleClose }) => {
  return (
    <button className="button-close" type="button" onClick={handleClose}>
      <img src={iconClose} alt="иконка закрытия" />
    </button>
  );
};

export default ButtonClose;
