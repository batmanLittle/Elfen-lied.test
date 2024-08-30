import "./Registr.css";
import FormComponent from "../FormComponent/FormComponent";
import arrow from "../../images/arrow-left.svg";

function Registr({ handleClose, handleOpen }) {
  const inputsRegistr = [
    { name: "e-mail", label: "e-mail", type: "email" },
    { name: "password", label: "пароль", type: "password" },
    { name: "password", label: "повторите пароль", type: "password" },
  ];

  return (
    <section className="registr form-component">
      <FormComponent
        inputs={inputsRegistr}
        title="Регистрация"
        textButton="Регистрация"
        handleClose={() => handleClose("registr")}
      />
      <div className="form__footer">
        <button
          className="form__footer-button"
          onClick={() => handleOpen("login")}
        >
          <img alt="стрелка влево" src={arrow} />
          <p className="form__footer-text small-text">нет аккаунта?</p>
        </button>
      </div>
    </section>
  );
}

export default Registr;
