import "./Button.css";

const Button = ({ text, type }) => {
  return (
    <button className="button" type={type}>
      <p className="button-text">{text}</p>
    </button>
  );
};

export default Button;
