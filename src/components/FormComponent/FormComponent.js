import "./FormComponent.css";
import ButtonClose from "../ButtonClose/ButtonClose";
import Button from "../Button/Button";

const FormComponent = ({ inputs, title, textButton, handleClose }) => {
  return (
    <form className="form">
      <ButtonClose handleClose={handleClose} />
      <p className="form-title">{title}</p>
      <div className="form-inputs">
        {inputs.map((input, index) => (
          <div key={input.id || index}>
            <label className="form-label">
              {input.label}
              <input
                className="form-input"
                type={input.type}
                name={input.name}
                minLength="2"
                maxLength="40"
                required
                placeholder={input.placeholder}
              />
            </label>
          </div>
        ))}
      </div>
      <Button text={textButton} />
    </form>
  );
};

export default FormComponent;
